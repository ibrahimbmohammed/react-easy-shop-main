class Scrollable extends Component {

    handleScroll = (e) => {
      const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      if (bottom) { ... }
    }
  
    render() {
      return (
        <ScrollableElement onScroll={this.handleScroll}>
          <OverflowingContent />
        </ScrollableElement>
      );
    }
  }