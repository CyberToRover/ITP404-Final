import React from "react";
import { render } from "@testing-library/react";
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import SatSetting from '../components//SatSetting';
import SatelliteList from '../components/SatelliteList';
import WorldMap from '../components//WorldMap';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Navigation from '../components/Navigation';

// const data = [
//   {
//     email: "zhongyu@usc.edu",
//     password: "12345",
//   },
//   {
//     email: "mrcarlos9500@gmail.com",
//     password: "112233",
//   },
// ];


test("rendering the header", () => {
    // Verify that the header is rendered
});

test("rendering the footer", () => {
    // Verify that the footer is rendered
});

test("rendering the world map without satellites", () => {
    // Verify that the world map is rendered without satellites
});

test("rendering the world map with satellites", () => {
    // Verify that the world map is rendered with satellites
});

test("rendering the satellite settings", () => {
    // Verify that the satellitle settings on the top left is rendered
});

test("rendering the satellite list with scroll bar", () => {
    // Verify that the satellitle list on the bottom left is rendered
});

test("rendering the signup forms", () => {
    // Verify that the sigup forms is rendered in validation
});

test("rendering the login forms", () => {
    // Verify that the login forms is rendered in validation
});

test("rendering the reset home page", () => {
    // Verify that the home page is rerendered after reset
});

test("render the logout page", () => {
    // Verify that the home page is rendered after logout
});