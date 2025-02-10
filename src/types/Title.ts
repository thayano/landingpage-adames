export type AlignTitle = "center" | "left" | "right"

export interface ITitleProps {
    text: string,
    subTitle?: string,
    align?: AlignTitle,
    className?: string
}