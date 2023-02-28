const SectionWrappers = (props) => {
  const { children } = props;

  return (
    <section
      className={props.sectionWrapperClassName}
      ref={props.sectionWrapperRef}
    >
      <div className="wrapper">{children}</div>
    </section>
  );
};

export default SectionWrappers;
