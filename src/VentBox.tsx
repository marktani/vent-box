import React from 'react'
import './VentBox.css'

class VentBox extends React.Component<{}, { inputValue: string }> {
  constructor(props: any) {
    super(props)
    this.state = {
      inputValue: '',
    }
  }

  render() {
    return (
      <div className="VentBox">
        <div className="outer-flex-container">
          <textarea
            className="VentInput"
            cols={200}
            rows={12}
            value={this.state.inputValue}
            onChange={e => this.updateInputValue(e)}
          />
          <div className="inner-flex-container">
            <p>{`Characters: ${this.state.inputValue.length}`}</p>
            <p>
              {this.state.inputValue.trim().length === 0
                ? `Words: 0`
                : `Words: ${this.state.inputValue.trim().split(' ').length}`}
            </p>
            <button
              onClick={() => {
                this.setState({
                  inputValue: '',
                })
              }}
            >
              Throw it out the vent!
            </button>
          </div>
        </div>
      </div>
    )
  }

  updateInputValue(e: any) {
    this.setState({
      inputValue: e.target.value,
    })
  }
}

export default VentBox
