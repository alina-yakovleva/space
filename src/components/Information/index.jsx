import "./index.css";
const Information = () => {
  return (
    <div className="information">
      <div className="information-block">
        <div className="information-text">
          Мы <div className="number">1</div>
          <div className="lower-information">на рынке</div>
        </div>
        <div className="information-text">
          гарантируем <div className="number">50%</div>
          <div className="lower-information">безопасность</div>
        </div>
      </div>
      <div className="information-block">
        <div className="information-text">
          календарик за<div className="number">2001</div>
          <div className="lower-information">в подарок</div>
        </div>
        <div className="information-text">
          путешествие<div className="number">597</div>
          <div className="lower-information">дней</div>
        </div>
      </div>
    </div>
  );
};
export default Information;
