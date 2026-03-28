import { useRender, mergeProps } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex justify-center items-center cursor-pointer hover:opacity-90 focus-visible:ring-foreground focus-visib e:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none border-3 border-border shadow-raised bg-linear-to-tl disabled:opacity-50 disabled:pointer-events-none font-medium active:shadow-inset transition-all duration-250 east-out active:scale-97", {
  variants: {
    variant: {
      default: "from-muted/5 to-muted/25",
      primary: "text-primary from-primary/5 to-primary/25",
      destructive: "text-destructive from-primary/5 to-primary/25",
      warning: "text-warning from-primary/5 to-primary/25"
    },
    size: {
      default:"h-12 px-4",
      icon: "h-12 w-12",
    },
    shape: {
      default: "rounded-xl",
      circle: "rounded-full"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    shape: "default"
  }
});

interface ButtonProps extends useRender.ComponentProps<"button">, VariantProps<typeof buttonVariants> {}

export default function Button(props: any) {
  const { render, ...rest } = props;
  const mergedProps = mergeProps(props, {
    className: twMerge(buttonVariants({
      variant: props.variant, 
      size: props.size, 
      shape: props.shape
    }), props.className
  )});

  const element = useRender({
    defaultTagName: 'button',
    render: props.render,
    props: mergedProps,
  });

  return element;
}