const DevMenuOverlay = (props) => {
  return (
    <div
      className={`overlay${props.showMenu ? " displayFlex" : " displayNone"}`}
      onClick={props.ShowSideMenu}
    />
  );
};
export default DevMenuOverlay;
