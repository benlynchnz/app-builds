import Header from "./Header.jsx";
import Content from "./Content.jsx";

export default class BuildApp extends React.Component {
  static propTypes = {
    element: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    element: {}
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}
