function Button(props) {
  const { className, name } = props;
  return <button className={`button ${className}`}>{name}</button>;
}

const element = (
  <div className="social-container">
    <div class="content">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button name="Like" className="like" />
        <Button name="Comment" className="comment" />
        <Button name="Share" className="share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
