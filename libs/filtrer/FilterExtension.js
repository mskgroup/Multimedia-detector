'use strict'

function FilterExtension(name, parserClassName, dashboardClassName, pathFilter, filterMatchingType, ignoreCase, message) {
    this._name = name || "";
    this._parserClassName = parserClassName || "";
    this._dashboardClassName = dashboardClassName || "";
    this._pathFilter = pathFilter || [];
    this._filterMatchingType = filterMatchingType || "text";
    this._ignoreCase = ignoreCase || true;
    this._message = message || "";
}
FilterExtension.prototype.getName = function () {
    return this._name;
}
FilterExtension.prototype.setName = function (name) {
    this._name = name;
    return this;
}
FilterExtension.prototype.getParserClassName = function () {
    return this._parserClassName;
}
FilterExtension.prototype.setParserClassName = function (parserClassName) {
    this._parserClassName = parserClassName;
    return this;
}
FilterExtension.prototype.getDashboardClassName = function () {
    return this._dashboardClassName;
}
FilterExtension.prototype.setDashboardClassName = function (dashboardClassName) {
    this._dashboardClassName = dashboardClassName;
    return this;
}
FilterExtension.prototype.getPathFilter = function () {
    return this._pathFilter;
}
FilterExtension.prototype.setPathFilter = function (pathFilter) {
    if (this._pathFilter) {
        this._pathFilter.concat(pathFilter);
    }
    return this;
}
FilterExtension.prototype.getFilterMatchingType = function () {
    return this._filterMatchingType;
}
FilterExtension.prototype.setFilterMatchingType = function (filterMatchingType) {
    this._filterMatchingType = filterMatchingType;
    return this;
}
FilterExtension.prototype.getIgnoreCase = function () {
    return this._ignoreCase;
}
FilterExtension.prototype.setIgnoreCase = function (ignoreCase) {
    this._ignoreCase = ignoreCase;
    return this;
}
FilterExtension.prototype.getMessage = function () {
    return this._message;
}
FilterExtension.prototype.setMessage = function (message) {
    this._message = message;
    return this;
}


