interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

const SectionWrapper = ({ children, ...props }: SectionWrapperProps) => (
  <section {...props} className={`py-16 lg:py-24 ${props.className || ""}`}>
    {children}
  </section>
);

export default SectionWrapper;
