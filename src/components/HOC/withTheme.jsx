import React from "react";
import {ThemeContext} from "../../pages/Todo/Todo";

export function withTheme(WrappedComponent) {
    return class extends React.Component {
        render() {
            return (
                <ThemeContext.Consumer>
                    {({theme, toggleTheme, checked, label}) => (
                        <WrappedComponent theme={theme} checked={checked} label={label}
                                          toggleTheme={toggleTheme} {...this.props} />
                    )}
                </ThemeContext.Consumer>
            )
        }
    }
}