import React from 'react';

import { Faqs } from '../../../api/faqs';

export default class FaqsAddItem extends React.Component {
  onSubmit(e) {
    const question = this.refs.question.value.trim();
    const reply = this.refs.reply.value.trim();

    e.preventDefault();

    if(question && reply) {
      Faqs.insert({ question, reply });
      this.refs.question.value = '';
      this.refs.reply.value = '';
    }
  }
  render() {
    return (
      <div className="section-1">
        <div className="container w-container">
          <div className="content-wrapper-1 content-wrapper-1-is-last">
            <div className="content-component-1">
              <form className="form" onSubmit={this.onSubmit.bind(this)}>
                <input type="text" ref="question" placeholder="Question"/>
                <input type="text" ref="reply" placeholder="Reply"/>
                <button>Add FAQ</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
