import css from "./Build.css";

const s3 = new AWS.S3({
  accessKeyId: "AKIAIHZ6JI5G7YSA74EA",
  secretAccessKey: "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",
  region: "us-east-1"
});

export default class BuildAppContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(s3);
    console.log(this._getBucketContents());
  }

  _getBucketContents() {
    const params = {
      Bucket: "static-benlyn-ch"
    };
    console.log(params);
    s3.listObjects(params, (err, data) => {
      console.log(err);
      return data;
    });
  }

  render() {
    return (
      <div className={css.content}>
        <div className={css.hdr}>A list of builds</div>
      </div>
    );
  }
}
