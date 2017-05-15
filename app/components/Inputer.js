const React = require('react');

const WORD_LENGTH_LIMIT = 22;

var Inputer = React.createClass({
  propTypes: {
    onEnter: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <div className='inputer'>
        <input type='text' className='add-input'
          placeholder='What do you need to do?'
          onKeyPress={this.onKeyPress}/>
      </div>
    );
  },
  onKeyPress: function(event) {
    if (event !== null && event.which === 13) {
      if (event.target !== null) {
        var input = event.target;
        var value = input.value;
        if (value.length > 0) {
          var tooLong = this.findLongWord(value);
    			if ( tooLong ) {
    				alert("One of the words you used is too long, please use a different word.");
    			} else {
            this.props.onEnter(value);
            input.value = '';
            input.focus();
          }
        }
      }
    }
  },
  // find if any word is longer than the limit, by default 22 letters
  findLongWord: function(text, limit) {
  	var findLongWord = false;
  	limit = ( typeof limit !== "undefined" && limit > 0 ) ? limit : WORD_LENGTH_LIMIT;
  	if ( typeof text !== "undefined" && text !== null ) {
  		var cleanedText = text.replace(/\s+/g, " ");
  		var words = cleanedText.split(" ");
  		$(words).each(function(index, value) {
  			if ( value.length > limit ) {
  				findLongWord = true;
  				return;
  			}
  		});
  	}
  	return findLongWord;
  }
});

module.exports = Inputer;
