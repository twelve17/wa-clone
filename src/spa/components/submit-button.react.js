import React from 'react';

function SubmitButton ({ text, enabled, onSubmit }) {
    if (enabled) {
        return <div className="submit" onClick={onSubmit}>{text}</div>
    }
    else {
        return <div className="submit" onClick={onSubmit} disabled>{text}</div>
    }
}

export default SubmitButton;