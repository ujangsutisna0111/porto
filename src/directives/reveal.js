// Simple mount-in animation. No IntersectionObserver, no scroll listeners,
// no shared/global state — it just adds a class the instant the element is
// inserted, and a plain CSS @keyframes animation (see main.css `.reveal`)
// takes it from there. Because it's pure CSS, it always plays on every
// mount, regardless of whether the page arrived via a hard refresh or a
// client-side Vue Router navigation.

export default {
  mounted(el) {
    el.classList.add('reveal')
  }
}
