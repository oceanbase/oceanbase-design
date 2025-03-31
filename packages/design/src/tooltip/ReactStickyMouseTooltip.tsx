import React from 'react';

export interface ReactStickyMouseTooltipProps {
  visible?: boolean;
  offsetX?: number;
  offsetY?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactElement;
}

export interface ReactStickyMouseTooltipState {
  xPosition: number;
  yPosition: number;
  mouseMoved: boolean;
  listenerActive: boolean;
}

class ReactStickyMouseTooltip extends React.PureComponent<
  ReactStickyMouseTooltipProps,
  ReactStickyMouseTooltipState
> {
  static defaultProps = {
    visible: true,
    offsetX: 0,
    offsetY: 0,
  };

  state = {
    xPosition: 0,
    yPosition: 0,
    mouseMoved: false,
    listenerActive: false,
  };

  componentDidMount() {
    this.addListener();
  }

  componentDidUpdate() {
    this.updateListener();
  }

  componentWillUnmount() {
    this.removeListener();
  }

  getTooltipPosition = ({ clientX: xPosition, clientY: yPosition }) => {
    this.setState({
      xPosition,
      yPosition,
      mouseMoved: true,
    });
  };

  addListener = () => {
    window.addEventListener('mousemove', this.getTooltipPosition);
    this.setState({ listenerActive: true });
  };

  removeListener = () => {
    window.removeEventListener('mousemove', this.getTooltipPosition);
    this.setState({ listenerActive: false });
  };

  updateListener = () => {
    if (!this.state.listenerActive && this.props.visible) {
      this.addListener();
    }

    if (this.state.listenerActive && !this.props.visible) {
      this.removeListener();
    }
  };

  render() {
    return (
      <div
        className={this.props.className}
        style={{
          display: this.props.visible && this.state.mouseMoved ? 'block' : 'none',
          position: 'fixed',
          top: this.state.yPosition + this.props.offsetY,
          left: this.state.xPosition + this.props.offsetX,
          ...this.props.style,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ReactStickyMouseTooltip;
