import { TimelineLite, Power2 } from 'gsap'

export const FadeMagicTween = (isFadeIn: boolean, selector: HTMLElement | any, isBlock: boolean = true) => {
  if (selector) {
    const t2 = new TimelineLite()
    t2?.fromTo(
      selector,
      isFadeIn ? 2 : 0.45,
      {
        display: isFadeIn ? 'none' : isBlock ? 'block' : 'flex',
        opacity: isFadeIn ? 0 : 1
      },
      {
        display: isFadeIn ? (isBlock ? 'block' : 'flex') : 'none',
        opacity: isFadeIn ? 1 : 0,
        ease: Power2.easeInOut
      }
    )
  }
}
