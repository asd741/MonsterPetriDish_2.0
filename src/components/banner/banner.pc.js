import React, { Component } from "react";
// import { connect } from "react-redux";
import { FaYoutube } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
export default class Pc extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let S = {
      init: function() {
        let action = window.location.href,
          i = action.indexOf("?a=");
        S.Drawing.init(".canvas");
        document.body.classList.add("body--ready");
        if (i !== -1) {
          S.UI.simulate(decodeURI(action).substring(i + 3));
        } else {
          S.UI.simulate(`|歡迎光臨|魔物培養皿`);
        }

        S.Drawing.loop(function() {
          S.Shape.render();
        });
      }
    };
    window.S = S;
    S.Drawing = (function() {
      let canvas,
        context,
        renderFn,
        requestFrame =
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(callback) {
            window.setTimeout(callback, 1000 / 60);
          };

      return {
        init: function(el) {
          canvas = document.querySelector(el);
          context = canvas.getContext("2d");
          this.adjustCanvas();

          window.addEventListener("resize", function(e) {
            S.Drawing.adjustCanvas();
          });
        },
        loop: function(fn) {
          renderFn = !renderFn ? fn : renderFn;
          this.clearFrame();
          if (!window.S) {
            return;
          }
          renderFn();
          requestFrame.call(window, this.loop.bind(this));
        },

        adjustCanvas: function() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        },

        clearFrame: function() {
          context.clearRect(0, 0, canvas.width, canvas.height);
        },

        getArea: function() {
          return { w: canvas.width, h: canvas.height };
        },

        drawCircle: function(p, c) {
          context.fillStyle = c.render();
          context.beginPath();
          context.arc(p.x, p.y, p.z, 0, 2 * Math.PI, true);
          context.closePath();
          context.fill();
        }
      };
    })();

    S.UI = (function() {
      let input = document.querySelector(".ui-input"),
        ui = document.querySelector(".ui"),
        help = document.querySelector(".help"),
        commands = document.querySelector(".commands"),
        overlay = document.querySelector(".overlay"),
        canvas = document.querySelector(".canvas"),
        interval,
        isTouch = false, //('ontouchstart' in window || navigator.msMaxTouchPoints),
        currentAction,
        resizeTimer,
        time,
        maxShapeSize = 25,
        firstAction = true,
        sequence = [],
        cmd = "#";

      function formatTime(date) {
        let h = date.getHours(),
          m = date.getMinutes();
        m = m < 10 ? "0" + m : m;
        return h + ":" + m;
      }

      function getValue(value) {
        return value && value.split(" ")[1];
      }

      function getAction(value) {
        value = value && value.split(" ")[0];
        return value && value[0] === cmd && value.substring(1);
      }

      function timedAction(fn, delay, max, reverse) {
        clearInterval(interval);
        currentAction = reverse ? max : 1;
        fn(currentAction);

        if (
          !max ||
          (!reverse && currentAction < max) ||
          (reverse && currentAction > 0)
        ) {
          interval = setInterval(function() {
            currentAction = reverse ? currentAction - 1 : currentAction + 1;
            fn(currentAction);

            if (
              (!reverse && max && currentAction === max) ||
              (reverse && currentAction === 0)
            ) {
              clearInterval(interval);
            }
          }, delay);
        }
      }

      function reset(destroy) {
        clearInterval(interval);
        sequence = [];
        time = null;
        destroy && S.Shape.switchShape(S.ShapeBuilder.letter(""));
      }

      function performAction(value) {
        let action, current;

        overlay.classList.remove("overlay--visible");
        sequence =
          typeof value === "object" ? value : sequence.concat(value.split("|"));
        input.value = "";
        checkInputWidth();

        timedAction(
          function(index) {
            current = sequence.shift();
            action = getAction(current);
            value = getValue(current);

            switch (action) {
              case "countdown":
                value = parseInt(value) || 10;
                value = value > 0 ? value : 10;

                timedAction(
                  function(index) {
                    if (index === 0) {
                      if (sequence.length === 0) {
                        S.Shape.switchShape(S.ShapeBuilder.letter(""));
                      } else {
                        performAction(sequence);
                      }
                    } else {
                      S.Shape.switchShape(S.ShapeBuilder.letter(index), true);
                    }
                  },
                  1000,
                  value,
                  true
                );
                break;

              case "rectangle":
                value = value && value.split("x");
                value =
                  value && value.length === 2
                    ? value
                    : [maxShapeSize, maxShapeSize / 2];

                S.Shape.switchShape(
                  S.ShapeBuilder.rectangle(
                    Math.min(maxShapeSize, parseInt(value[0])),
                    Math.min(maxShapeSize, parseInt(value[1]))
                  )
                );
                break;

              case "circle":
                value = parseInt(value) || maxShapeSize;
                value = Math.min(value, maxShapeSize);
                S.Shape.switchShape(S.ShapeBuilder.circle(value));
                break;

              case "time":
                let t = formatTime(new Date());

                if (sequence.length > 0) {
                  S.Shape.switchShape(S.ShapeBuilder.letter(t));
                } else {
                  timedAction(function() {
                    t = formatTime(new Date());
                    if (t !== time) {
                      time = t;
                      S.Shape.switchShape(S.ShapeBuilder.letter(time));
                    }
                  }, 1000);
                }
                break;

              default:
                S.Shape.switchShape(
                  S.ShapeBuilder.letter(current[0] === cmd ? "What?" : current)
                );
            }
          },
          500,
          sequence.length
        );
      }

      function checkInputWidth(e) {
        if (input.value.length > 18) {
          ui.classList.add("ui--wide");
        } else {
          ui.classList.remove("ui--wide");
        }

        if (firstAction && input.value.length > 0) {
          ui.classList.add("ui--enter");
        } else {
          ui.classList.remove("ui--enter");
        }
      }

      function bindEvents() {
        document.body.addEventListener("keydown", function(e) {
          input.focus();

          if (e.keyCode === 13) {
            firstAction = false;
            reset();
            performAction(input.value);
          }
        });

        input.addEventListener("input", checkInputWidth);
        input.addEventListener("change", checkInputWidth);
        input.addEventListener("focus", checkInputWidth);

        help.addEventListener("click", function(e) {
          overlay.classList.toggle("overlay--visible");
          overlay.classList.contains("overlay--visible") && reset(true);
        });

        commands.addEventListener("click", function(e) {
          let el, info, demo, tab, active, url;

          if (e.target.classList.contains("commands-item")) {
            el = e.target;
          } else {
            el = e.target.parentNode.classList.contains("commands-item")
              ? e.target.parentNode
              : e.target.parentNode.parentNode;
          }

          info = el && el.querySelector(".commands-item-info");
          demo = el && info.getAttribute("data-demo");
          url = el && info.getAttribute("data-url");

          if (info) {
            overlay.classList.remove("overlay--visible");

            if (demo) {
              input.value = demo;

              if (isTouch) {
                reset();
                performAction(input.value);
              } else {
                input.focus();
              }
            } else if (url) {
              //window.location = url;
            }
          }
        });

        canvas.addEventListener("click", function(e) {
          overlay.classList.remove("overlay--visible");
        });
      }

      function init() {
        bindEvents();
        input.focus();
        isTouch && document.body.classList.add("touch");
      }

      init();

      return {
        simulate: function(action) {
          performAction(action);
        }
      };
    })();

    S.UI.Tabs = (function() {
      let tabs = document.querySelector(".tabs"),
        labels = document.querySelector(".tabs-labels"),
        triggers = document.querySelectorAll(".tabs-label"),
        panels = document.querySelectorAll(".tabs-panel");

      function activate(i) {
        triggers[i].classList.add("tabs-label--active");
        panels[i].classList.add("tabs-panel--active");
      }

      function bindEvents() {
        labels.addEventListener("click", function(e) {
          let el = e.target,
            index;

          if (el.classList.contains("tabs-label")) {
            for (let t = 0; t < triggers.length; t++) {
              triggers[t].classList.remove("tabs-label--active");
              panels[t].classList.remove("tabs-panel--active");

              if (el === triggers[t]) {
                index = t;
              }
            }

            activate(index);
          }
        });
      }

      function init() {
        activate(0);
        bindEvents();
      }

      // Init
      init();
    })();

    S.Point = function(args) {
      this.x = args.x;
      this.y = args.y;
      this.z = args.z;
      this.a = args.a;
      this.h = args.h;
    };

    S.Color = function(r, g, b, a) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
    };

    S.Color.prototype = {
      render: function() {
        return (
          "rgba(" + this.r + "," + +this.g + "," + this.b + "," + this.a + ")"
        );
      }
    };

    S.Dot = function(x, y) {
      this.p = new S.Point({
        x: x,
        y: y,
        z: 3, //5
        a: 1, //1
        h: 0
      });

      this.e = 0.07;
      this.s = true;

      this.c = new S.Color(255, 255, 255, this.p.a);

      this.t = this.clone();
      this.q = [];
    };

    S.Dot.prototype = {
      clone: function() {
        return new S.Point({
          x: this.x,
          y: this.y,
          z: this.z,
          a: this.a,
          h: this.h
        });
      },

      _draw: function() {
        this.c.a = this.p.a;
        S.Drawing.drawCircle(this.p, this.c);
      },

      _moveTowards: function(n) {
        let details = this.distanceTo(n, true),
          dx = details[0],
          dy = details[1],
          d = details[2],
          e = this.e * d;

        if (this.p.h === -1) {
          this.p.x = n.x;
          this.p.y = n.y;
          return true;
        }

        if (d > 1) {
          this.p.x -= (dx / d) * e;
          this.p.y -= (dy / d) * e;
        } else {
          if (this.p.h > 0) {
            this.p.h--;
          } else {
            return true;
          }
        }

        return false;
      },
      _update: function() {
        if (this._moveTowards(this.t)) {
          let p = this.q.shift();

          if (p) {
            this.t.x = p.x || this.p.x;
            this.t.y = p.y || this.p.y;
            this.t.z = p.z || this.p.z;
            this.t.a = p.a || this.p.a;
            this.p.h = p.h || 0;
          } else {
            if (this.s) {
              this.p.x -= Math.sin(Math.random() * 3.142);
              this.p.y -= Math.sin(Math.random() * 3.142);
            } else {
              this.move(
                new S.Point({
                  x: this.p.x + Math.random() * 50 - 25,
                  y: this.p.y + Math.random() * 50 - 25
                })
              );
            }
          }
        }
        let d;
        d = this.p.a - this.t.a;
        this.p.a = Math.max(0.1, this.p.a - d * 0.05);
        d = this.p.z - this.t.z;
        this.p.z = Math.max(1, this.p.z - d * 0.05);
      },

      distanceTo: function(n, details) {
        let dx = this.p.x - n.x,
          dy = this.p.y - n.y,
          d = Math.sqrt(dx * dx + dy * dy);

        return details ? [dx, dy, d] : d;
      },

      move: function(p, avoidStatic) {
        if (!avoidStatic || (avoidStatic && this.distanceTo(p) > 1)) {
          this.q.push(p);
        }
      },

      render: function() {
        this._update();
        this._draw();
      }
    };

    S.ShapeBuilder = (function() {
      let gap = 13,
        shapeCanvas = document.createElement("canvas"),
        shapeContext = shapeCanvas.getContext("2d"),
        fontSize = 500,
        fontFamily = "Avenir, Helvetica Neue, Helvetica, Arial, sans-serif";

      function fit() {
        shapeCanvas.width = Math.floor(window.innerWidth / gap) * gap;
        shapeCanvas.height = Math.floor(window.innerHeight / gap) * gap;
        shapeContext.fillStyle = "red";
        shapeContext.textBaseline = "middle";
        shapeContext.textAlign = "center";
      }

      function processCanvas() {
        let pixels = shapeContext.getImageData(
            0,
            0,
            shapeCanvas.width,
            shapeCanvas.height
          ).data,
          dots = [],
          x = 0,
          y = 0,
          fx = shapeCanvas.width,
          fy = shapeCanvas.height,
          w = 0,
          h = 0;

        for (let p = 0; p < pixels.length; p += 4 * gap) {
          if (pixels[p + 3] > 0) {
            dots.push(
              new S.Point({
                x: x,
                y: y
              })
            );

            w = x > w ? x : w;
            h = y > h ? y : h;
            fx = x < fx ? x : fx;
            fy = y < fy ? y : fy;
          }

          x += gap;

          if (x >= shapeCanvas.width) {
            x = 0;
            y += gap;
            p += gap * 4 * shapeCanvas.width;
          }
        }

        return { dots: dots, w: w + fx, h: h + fy };
      }

      function setFontSize(s) {
        shapeContext.font = "bold " + s + "px " + fontFamily;
      }

      function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }

      function init() {
        fit();
        window.addEventListener("resize", fit);
      }

      // Init
      init();

      return {
        imageFile: function(url, callback) {
          let image = new Image(),
            a = S.Drawing.getArea();

          image.onload = function() {
            shapeContext.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height);
            shapeContext.drawImage(this, 0, 0, a.h * 0.6, a.h * 0.6);
            callback(processCanvas());
          };

          image.onerror = function() {
            callback(S.ShapeBuilder.letter("What?"));
          };

          image.src = url;
        },

        circle: function(d) {
          let r = Math.max(0, d) / 2;
          shapeContext.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height);
          shapeContext.beginPath();
          shapeContext.arc(r * gap, r * gap, r * gap, 0, 2 * Math.PI, false);
          shapeContext.fill();
          shapeContext.closePath();

          return processCanvas();
        },

        letter: function(l) {
          let s = 0;

          setFontSize(fontSize);
          s = Math.min(
            fontSize,
            (shapeCanvas.width / shapeContext.measureText(l).width) *
              0.8 *
              fontSize,
            (shapeCanvas.height / fontSize) *
              (isNumber(l) ? 1 : 0.45) *
              fontSize
          );
          setFontSize(s);

          shapeContext.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height);
          shapeContext.fillText(
            l,
            shapeCanvas.width / 2,
            shapeCanvas.height / 2
          );

          return processCanvas();
        },

        rectangle: function(w, h) {
          let dots = [],
            width = gap * w,
            height = gap * h;

          for (let y = 0; y < height; y += gap) {
            for (let x = 0; x < width; x += gap) {
              dots.push(
                new S.Point({
                  x: x,
                  y: y
                })
              );
            }
          }

          return { dots: dots, w: width, h: height };
        }
      };
    })();

    S.Shape = (function() {
      let dots = [],
        width = 0,
        height = 0,
        cx = 0,
        cy = 0;

      function compensate() {
        let a = S.Drawing.getArea();

        cx = a.w / 2 - width / 2;
        cy = a.h / 2 - height / 2;
      }

      return {
        shuffleIdle: function() {
          let a = S.Drawing.getArea();

          for (let d = 0; d < dots.length; d++) {
            if (!dots[d].s) {
              dots[d].move({
                x: Math.random() * a.w,
                y: Math.random() * a.h
              });
            }
          }
        },

        switchShape: function(n, fast) {
          let size,
            a = S.Drawing.getArea();

          width = n.w;
          height = n.h;

          compensate();

          if (n.dots.length > dots.length) {
            size = n.dots.length - dots.length;
            for (let d = 1; d <= size; d++) {
              dots.push(new S.Dot(a.w / 2, a.h / 2));
            }
          }
          let d = 0,
            i = 0;

          while (n.dots.length > 0) {
            i = Math.floor(Math.random() * n.dots.length);
            dots[d].e = fast ? 0.25 : dots[d].s ? 0.14 : 0.11;

            if (dots[d].s) {
              dots[d].move(
                new S.Point({
                  z: Math.random() * 20 + 10,
                  a: Math.random(),
                  h: 18
                })
              );
            } else {
              dots[d].move(
                new S.Point({
                  z: Math.random() * 5 + 5,
                  h: fast ? 18 : 30
                })
              );
            }

            dots[d].s = true;
            dots[d].move(
              new S.Point({
                x: n.dots[i].x + cx,
                y: n.dots[i].y + cy,
                a: 1,
                z: 5,
                h: 0
              })
            );

            n.dots = n.dots.slice(0, i).concat(n.dots.slice(i + 1));
            d++;
          }

          for (let i = d; i < dots.length; i++) {
            if (dots[i].s) {
              dots[i].move(
                new S.Point({
                  z: Math.random() * 20 + 10,
                  a: Math.random(),
                  h: 20
                })
              );

              dots[i].s = false;
              dots[i].e = 0.04;
              dots[i].move(
                new S.Point({
                  x: Math.random() * a.w,
                  y: Math.random() * a.h,
                  a: 0.3, //.4
                  z: Math.random() * 4,
                  h: 0
                })
              );
            }
          }
        },

        render: function() {
          for (let d = 0; d < dots.length; d++) {
            dots[d].render();
          }
        }
      };
    })();
    S.init();
  }

  componentWillUnmount() {
    window.S = null;
  }
  render() {
    return (
      <>
        {/* <!-- <div style="text-align:center;clear:both;position:absolute;top:0;left:260px">
          <script src="/gg_bd_ad_720x90.js" type="text/javascript"></script>
          <script src="/follow.js" type="text/javascript"></script>
        </div> --> */}
        <canvas className="canvas" />
        <div id="logo">
          <img src={require("../../images/logo.png")} alt=''/>
        </div>
        <div
          id="video-btn"
          onClick={() => {
            this.props.handlePopup(true);
          }}
        >
          <FaYoutube />
        </div>
        <div
          id="music-btn"
          onClick={() => {
            this.props.handleMusic(!this.props.music);
          }}
          style={{ opacity: this.props.music ? 1 : 0.5 }} 
        >
          <FaVolumeUp/>
        </div>
        {this.props.showPopup === true ? (
          <div className="popup">
            <div className="mask">
              <div className="authbox">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/-cF4cxzY-VE"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </div>
        ) : null}
        <div className="help">?</div>

        <div className="ui">
          <input
            className="ui-input"
            type="text"
            placeholder="input something..."
          />
          <span className="ui-return">↵</span>
        </div>
        <div className="overlay">
          <div className="tabs">
            <div className="tabs-labels">
              <span className="tabs-label">Commands</span>
              <span className="tabs-label">Info</span>
              <span className="tabs-label">Share</span>
            </div>

            <div className="tabs-panels">
              <ul className="tabs-panel commands">
                <li className="commands-item">
                  <span className="commands-item-title">Text</span>
                  <span className="commands-item-info" data-demo="Hello :)">
                    Type anything
                  </span>
                  <span className="commands-item-action">Demo</span>
                </li>
                <li className="commands-item">
                  <span className="commands-item-title">Countdown</span>
                  <span
                    className="commands-item-info"
                    data-demo="#countdown 10"
                  >
                    #countdown<span className="commands-item-mode">number</span>
                  </span>
                  <span className="commands-item-action">Demo</span>
                </li>
                <li className="commands-item">
                  <span className="commands-item-title">Time</span>
                  <span className="commands-item-info" data-demo="#time">
                    #time
                  </span>
                  <span className="commands-item-action">Demo</span>
                </li>
                <li className="commands-item">
                  <span className="commands-item-title">Rectangle</span>
                  <span
                    className="commands-item-info"
                    data-demo="#rectangle 30x15"
                  >
                    #rectangle
                    <span className="commands-item-mode">width x height</span>
                  </span>
                  <span className="commands-item-action">Demo</span>
                </li>
                <li className="commands-item">
                  <span className="commands-item-title">Circle</span>
                  <span className="commands-item-info" data-demo="#circle 25">
                    #circle<span className="commands-item-mode">diameter</span>
                  </span>
                  <span className="commands-item-action">Demo</span>
                </li>

                <li className="commands-item commands-item--gap">
                  <span className="commands-item-title">Animate</span>
                  <span
                    className="commands-item-info"
                    data-demo="The time is|#time|#countdown 3|#icon thumbs-up"
                  >
                    <span className="commands-item-mode">command1</span>&nbsp;|
                    <span className="commands-item-mode">command2</span>
                  </span>
                  <span className="commands-item-action">Demo</span>
                </li>
              </ul>

              <div className="tabs-panel ui-details">
                <div className="ui-details-content">
                  <h1>Shape Shifter</h1>
                  <p>
                    An experiment by{" "}
                    <a href="//www.kennethcachia.com">Kenneth Cachia</a>.
                    <br />
                    <a href="//fortawesome.github.io/Font-Awesome/#icons-new">
                      Font Awesome
                    </a>{" "}
                    is being used to render all #icons.
                  </p>

                  <br />
                  <p>
                    Visit{" "}
                    <a href="http://www.kennethcachia.com/shape-shifter/?a=#icon thumbs-up">
                      Shape Shifter
                    </a>{" "}
                    to use icons.
                  </p>
                </div>
              </div>

              <div className="tabs-panel ui-share">
                <div className="ui-share-content">
                  <h1>Sharing</h1>
                  <p>
                    Simply add <em>?a=</em> to the current URL to share any
                    static or animated text. Examples:
                  </p>
                  <p>
                    <a href="http://www.kennethcachia.com/shape-shifter?a=Hello">
                      www.kennethcachia.com/shape-shifter?a=Hello
                    </a>
                    <br />
                    <a href="http://www.kennethcachia.com/shape-shifter?a=Hello|#countdown 3">
                      www.kennethcachia.com/shape-shifter?a=Hello|#countdown 3
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
