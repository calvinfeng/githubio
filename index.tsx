import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Index extends React.Component<any, any> {
    render() {
        return <h1>Hello World</h1>
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Index />, document.getElementById("root"));
})