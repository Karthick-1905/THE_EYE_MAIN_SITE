import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import TypographySystem from "../components/TypographySystem";
import ErrorBoundary from "../components/ErrorBoundary";
import Lanyard from "../components/Lanyard/Lanyard";
import "../components/typography-system.css";
import "../css/joinus.css";

export default function JoinUs() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const initialMode = params.get("mode") === "login" ? "login" : "register";

  const [mode, setMode] = useState(initialMode);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [busy, setBusy] = useState(false);
  const [alert, setAlert] = useState({ type: "", msg: "" });
  const [currentUser, setCurrentUser] = useState(null);
  const [feed, setFeed] = useState([
    "BOOT: Initializing ACCESS GATE…",
    "NET: Tunnel established. Cipher OK.",
    `SYS: Ready for credentials. MODE=${initialMode.toUpperCase()}`,
  ]);

  const isLogin = mode === "login";
  const feedRef = useRef(null);

  // --- Auto-scroll feed
  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.scrollTop = feedRef.current.scrollHeight;
    }
  }, [feed]);

  // --- Load existing user session
  useEffect(() => {
    const saved = localStorage.getItem("the_eye_current_user");
    if (saved) setCurrentUser(JSON.parse(saved));
  }, []);

  const canSubmit = useMemo(() => {
    if (!form.email || !form.password) return false;
    if (!isLogin) {
      if (!form.name) return false;
      if (form.password.length < 6) return false;
      if (form.password !== form.confirm) return false;
    }
    return true;
  }, [form, isLogin]);

  // --- Local fake DB
  const getUsers = () => JSON.parse(localStorage.getItem("the_eye_users") || "[]");
  const saveUsers = (users) => localStorage.setItem("the_eye_users", JSON.stringify(users));

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setAlert({ type: "", msg: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit || busy) return;

    setBusy(true);
    setAlert({ type: "", msg: "" });
    logFeed("AUTH: Validating input…");

    const users = getUsers();
    const email = form.email.trim().toLowerCase();

    setTimeout(() => {
      if (isLogin) {
        const found = users.find((u) => u.email === email && u.password === form.password);
        if (!found) {
          fail("Invalid credentials.", "AUTH: ACCESS DENIED (invalid credentials)");
        } else {
          succeed(`Welcome back, ${found.name}!`, `AUTH: ACCESS GRANTED → ${found.name}`);
          signIn(found);
        }
      } else {
        if (users.some((u) => u.email === email)) {
          fail("Email already registered. Try logging in.", "AUTH: Registration blocked (email exists)");
        } else {
          const user = { name: form.name.trim(), email, password: form.password };
          users.push(user);
          saveUsers(users);
          signIn(user);
          succeed("Registration complete. Redirecting…", [
            `AUTH: PROFILE CREATED → ${user.name}`,
            "AUTH: ACCESS GRANTED",
          ]);
        }
      }
      setBusy(false);
    }, 800);
  };

  const fail = (msg, feedMsg) => {
    setAlert({ type: "error", msg });
    logFeed(feedMsg);
  };

  const succeed = (msg, feedMsg) => {
    setAlert({ type: "success", msg });
    if (Array.isArray(feedMsg)) feedMsg.forEach(logFeed);
    else logFeed(feedMsg);
    setTimeout(() => navigate("/"), 900);
  };

  const signIn = (user) => {
    localStorage.setItem("the_eye_current_user", JSON.stringify({ email: user.email, name: user.name }));
    setCurrentUser({ email: user.email, name: user.name });
  };

  const logFeed = (line) => setFeed((f) => [...f, line]);

  const switchMode = (next) => {
    setMode(next);
    setAlert({ type: "", msg: "" });
    setForm({ name: "", email: "", password: "", confirm: "" });
    logFeed(`SYS: MODE set to ${next.toUpperCase()}`);
  };

  return (
    <main className="joinus-page" role="main">
      <ErrorBoundary>
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </ErrorBoundary>
      <div className="gate-frame">
        {/* HEADER */}
        <header className="gate-header">
          <TypographySystem.MonoMedium className="gate-title">
            [ THE EYE // ACCESS GATE ]
          </TypographySystem.MonoMedium>
          <div className="gate-controls">
            <span className="gate-mode-label">MODE:</span>
            <button
              className={`gate-mode ${isLogin ? "active" : ""}`}
              onClick={() => switchMode("login")}
            >
              LOGIN
            </button>
            <button
              className={`gate-mode ${!isLogin ? "active" : ""}`}
              onClick={() => switchMode("register")}
            >
              REGISTER
            </button>
          </div>
          <Link to="/" className="gate-home">
            HOME
          </Link>
        </header>

        {/* BODY */}
        <div className="gate-columns">
          {/* FORM */}
          <form className="gate-credentials" onSubmit={handleSubmit} noValidate>
            {!isLogin && (
              <PromptField label="> IDENTITY:" id="name" value={form.name} onChange={handleChange} />
            )}
            <PromptField label="> EMAIL:" id="email" type="email" value={form.email} onChange={handleChange} />
            <PromptField
              label="> PASSCODE:"
              id="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder={isLogin ? "••••••••" : "At least 6 characters"}
            />
            {!isLogin && (
              <PromptField
                label="> CONFIRM:"
                id="confirm"
                type="password"
                value={form.confirm}
                onChange={handleChange}
                placeholder="Re-enter passcode"
              />
            )}

            {alert.msg && <div className={`joinus-alert ${alert.type}`}>{alert.msg}</div>}

            <div className="gate-actions">
              <button className="retro-button dh-primary" disabled={!canSubmit || busy}>
                <TypographySystem.Button>
                  {busy ? "EXECUTING…" : isLogin ? "LOGIN" : "REGISTER"}
                </TypographySystem.Button>
              </button>
              <button
                type="button"
                className="retro-button dh-secondary"
                onClick={() => setForm({ name: "", email: "", password: "", confirm: "" })}
              >
                <TypographySystem.Button>CLEAR</TypographySystem.Button>
              </button>
            </div>

            <TypographySystem.BodySmall className="gate-hint">
              Note: Demo only. Credentials stored locally in your browser.
            </TypographySystem.BodySmall>
          </form>

          {/* STATUS FEED */}
          <aside className="gate-status" aria-live="polite">
            <TypographySystem.Label className="gate-status-title">STATUS FEED</TypographySystem.Label>
            <div className="gate-feed" ref={feedRef}>
              {currentUser && (
                <div className="feed-line">
                  USR: signed in as {currentUser.name} ({currentUser.email})
                </div>
              )}
              {feed.map((line, idx) => (
                <div className="feed-line" key={idx}>
                  {line}
                </div>
              ))}
            </div>
            {currentUser && (
              <button
                className="retro-button dh-secondary gate-signout"
                onClick={() => {
                  localStorage.removeItem("the_eye_current_user");
                  setCurrentUser(null);
                  setAlert({ type: "success", msg: "Signed out." });
                  logFeed("SYS: Session cleared");
                }}
              >
                <TypographySystem.Button>SIGN OUT</TypographySystem.Button>
              </button>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}

function PromptField({ label, id, type = "text", value, onChange, placeholder }) {
  return (
    <div className="prompt-row">
      <label htmlFor={id} className="prompt-label">{label}</label>
      <input
        id={id}
        className="prompt-input"
        type={type}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
