import React, { Component } from "react";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selected: this.props.initial || -1,
    };
  }

  toggleDropdown(e) {
    e.preventDefault();

    this.setState({
      active: !this.state.active,
    });
  }

  handleClick(i, option, roomId) {
    if (option === "Equipment") {
      this.props.history.push(`/dashboard/equipment/${roomId}`);
    } else if (option === "Remote") {
      this.props.history.push(`/dashboard/remote/${roomId}`);
    }
    this.setState({
      selected: i,
    });
  }

  renderOptions() {
    if (!this.props.options) {
      return;
    }

    return this.props.options.map((option, i) => {
      return (
        <li
          onClick={(evt) => this.handleClick(i, option, this.props.room._id)}
          key={i}
          className={
            "dropdown__list-item " +
            (i === this.state.selected ? "dropdown__list-item--active" : "")
          }
        >
          {option}
        </li>
      );
    });
  }

  render() {
    const { room, deleteWarning, navigateEdit } = this.props;

    return (
      <div className="dashsidebar__items">
        <div className="dropdown">
          <div className="dropdown__button-box">
            <button
              onClick={(e) => this.toggleDropdown(e)}
              className="dropdown__toggle dropdown__list-item"
            >
              <h5 className="dropdown__title">{room.name}</h5>
            </button>{" "}
            <button
              onClick={(e) => navigateEdit(e, room._id)}
              className="dropdown__button-1 dropdown__button"
            >
              <svg className="user-nav__sidebar-svg">
                <use
                  className="svg__use-pencil-sidebar"
                  xlinkHref={
                    window.location.origin + "/images/sprite.svg#icon-pencil"
                  }
                ></use>
              </svg>
            </button>
            <button
              onClick={(e) => deleteWarning(e, room._id)}
              className="dropdown__button dropdown__button-2"
            >
              <svg className="user-nav__sidebar-svg">
                <use
                  className="svg__use-bin2-sidebar"
                  xlinkHref={
                    window.location.origin + "/images/sprite.svg#icon-bin2"
                  }
                ></use>
              </svg>
            </button>
          </div>
          <ul
            className={
              "dropdown__list " +
              (this.state.active ? "dropdown__list--active" : "")
            }
          >
            {this.renderOptions()}
          </ul>
        </div>
      </div>
    );
  }
}
