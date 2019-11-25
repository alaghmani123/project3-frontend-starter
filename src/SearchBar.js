import React from 'react';

class SearchBar extends React.Component {
    state = { searchFor: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.searchFor);

    };
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>image search </label>
                        <input
                            type="text"
                            value={this.state.searchFor}
                            onChange={e => this.setState({ searchFor: e.target.value })} />
                    </div>
                </form>
            </div>

        );
    }
}
export default SearchBar;