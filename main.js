class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      response: ''
    };
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Make a call to the GPT-3 API to get the response
    // Replace this with your actual code to get the response from GPT-3
    const response = "Code a video game";
    this.setState({ response: response });
  }

  render() {
    return (
      <div class="container">
        <div class="sidebar">
          <h1>ChatGPT</h1>
          <h2>A language model by OpenAI</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div class="input-container">
            <textarea onChange={this.handleChange} value={this.state.input} />
            <button type="submit">Submit</button>
          </div>
        </form>
        <div class="response">
          {this.state.response}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
