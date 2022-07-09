/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import main from "./main.css";

import {
    UilEstate,
    UilCompass,
    UilBell,
    UilChat,
    UilBookmark,
    UilAnalysis,
    UilPalette,
    UilSetting,
    UilEllipsisH,
    UilHeart,
    UilCommentDots,
    UilShare,
    UilEdit,
    UilSearch,
} from "@iconscout/react-unicons";

const Sidebar = () => {
    const [active, setActive] = useState("HOME");

    return (
        <main>
            <div className="container">
                <div className="left">
                    <a href="#" className="profile d-flex align-items-center">
                        <div className="profile-pic">
                            <img
                                src="https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                                alt=""
                            />
                        </div>

                        <div className="handle">
                            <h4>Diana Ayi</h4>
                            <p className="text-muted">@dayi</p>
                        </div>
                    </a>

                    <div className="sidebar mt-3">
                        <a
                            href=""
                            className={`menu-item ${
                                active === "HOME" ? "active" : ""
                            }`}
                            onClick={() => setActive("HOME")}
                        >
                            <span>
                                <UilEstate className="sidebar-icon" />
                            </span>
                            <h3 className="ms-4">Home</h3>
                        </a>

                        <a
                            href=""
                            className={`menu-item ${
                                active === "EXPLORE" ? "active" : ""
                            }`}
                            onClick={() => {
                                setActive("EXPLORE");
                            }}
                        >
                            <span>
                                <UilCompass className="sidebar-icon" />
                            </span>
                            <h3 className="ms-4">Explore</h3>
                        </a>

                        <div
                            className={`menu-item ${
                                active === "NOTIFICATION" ? "active" : ""
                            }`}
                            onClick={() => {
                                setActive("NOTIFICATION");
                            }}
                            id="notification"
                        >
                            <span>
                                <UilBell className="sidebar-icon" />
                                <small className="notification-count bg-danger">
                                    9+
                                </small>
                            </span>
                            <h3 className="ms-4">Notification</h3>

                            {/* NOTIFICATION POPUP */}
                            <div className="notification-popup">
                                <div>
                                    <div className="profile-pic">
                                        <img
                                            src="https://images.unsplash.com/photo-1647785036211-b62a72359399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div className="notification-body">
                                        <b>
                                            Anna Kelan accepted your friend
                                            request
                                        </b>
                                        <small className="text-muted">
                                            1h ago
                                        </small>
                                    </div>
                                </div>
                                <div>
                                    <div className="profile-pic">
                                        <img
                                            src="https://images.unsplash.com/photo-1644982653424-1bfed7f972a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80"
                                            alt=""
                                        />
                                    </div>

                                    <div className="notification-body">
                                        <b>
                                            Kelly Doe accepted your friend
                                            request
                                        </b>
                                        <small className="text-muted">
                                            1h ago
                                        </small>
                                    </div>
                                </div>
                                <div>
                                    <div className="profile-pic">
                                        <img
                                            src="https://images.unsplash.com/photo-1656419575790-6428dbc82be9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                            alt=""
                                        />
                                    </div>

                                    <div className="notification-body">
                                        <b>
                                            Alex Simp accepted your friend
                                            request
                                        </b>
                                        <small className="text-muted">
                                            1h ago
                                        </small>
                                    </div>
                                </div>
                                <div>
                                    <div className="profile-pic">
                                        <img
                                            src="https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                            alt=""
                                        />
                                    </div>

                                    <div className="notification-body">
                                        <b>
                                            Yena Kaha accepted your friend
                                            request
                                        </b>
                                        <small className="text-muted">
                                            1h ago
                                        </small>
                                    </div>
                                </div>
                                <div>
                                    <div className="profile-pic">
                                        <img
                                            src="https://images.unsplash.com/photo-1656446479000-933fe0a0796b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                                            alt=""
                                        />
                                    </div>

                                    <div className="notification-body">
                                        <b>
                                            Anny Mala accepted your friend
                                            request
                                        </b>
                                        <small className="text-muted">
                                            1h ago
                                        </small>
                                    </div>
                                </div>
                                <div>
                                    <div className="profile-pic">
                                        <img
                                            src="https://images.unsplash.com/photo-1656549702689-2805939a1b12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                                            alt=""
                                        />
                                    </div>

                                    <div className="notification-body">
                                        <b>John</b> friend request
                                        <small className="text-muted">
                                            1h ago
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`menu-item ${
                                active === "MESSAGES" ? "active" : ""
                            }`}
                            onClick={() => {
                                setActive("MESSAGES");
                            }}
                            id="message-notification"
                        >
                            <span>
                                <UilChat className="sidebar-icon" />
                                <small className="notification-count bg-danger">
                                    6
                                </small>
                            </span>
                            <h3 className="ms-4">Messages</h3>
                        </div>
                        <a
                            href=""
                            className={`menu-item ${
                                active === "BOOKMARKS" ? "active" : ""
                            }`}
                            onClick={() => {
                                setActive("BOOKMARKS");
                            }}
                        >
                            <span>
                                <UilBookmark className="sidebar-icon" />
                            </span>
                            <h3 className="ms-4">Bookmarks</h3>
                        </a>
                        <a
                            href=""
                            className={`menu-item ${
                                active === "ANALYTICS" ? "active" : ""
                            }`}
                            onClick={() => {
                                setActive("ANALYTICS");
                            }}
                        >
                            <span>
                                <UilAnalysis className="sidebar-icon" />
                            </span>
                            <h3 className="ms-4">Analytics</h3>
                        </a>
                        <a
                            href=""
                            className={`menu-item ${
                                active === "THEME" ? "active" : ""
                            }`}
                            onClick={() => {
                                setActive("THEME");
                            }}
                        >
                            <span>
                                <UilPalette className="sidebar-icon" />
                            </span>
                            <h3 className="ms-4">Theme</h3>
                        </a>
                        <a
                            href=""
                            className={`menu-item ${
                                active === "SETTINGS" ? "active" : ""
                            }`}
                            onClick={() => {
                                setActive("SETTINGS");
                            }}
                        >
                            <span>
                                <UilSetting className="sidebar-icon" />
                            </span>
                            <h3 className="ms-4">Settings</h3>
                        </a>
                    </div>
                    {/* END OF SIDEBAR */}

                    <label
                        htmlFor="create-post"
                        className="btn btn-primary mt-3 py-3"
                    >
                        Create Post
                    </label>
                </div>
                {/* END OF LEFT */}

                {/* MIDDLE */}
                <div className="middle">
                    {/* STORIES */}
                    <div className="stories d-flex justify-content-between">
                        <div className="story">
                            <div className="profile-pic">
                                <img
                                    src="https://images.unsplash.com/photo-1656354798706-bc0c3b99f291?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt=""
                                />
                            </div>
                            <p className="name">Your Story</p>
                        </div>
                        <div className="story">
                            <div className="profile-pic">
                                <img
                                    src="https://images.unsplash.com/photo-1656602887511-30162cceffe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    alt=""
                                />
                            </div>
                            <p className="name">Anna Keladhi</p>
                        </div>
                        <div className="story">
                            <div className="profile-pic">
                                <img
                                    src="https://images.unsplash.com/photo-1656437660370-4e8886a0e8ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                    alt=""
                                />
                            </div>
                            <p className="name">Kelly Doe</p>
                        </div>
                        <div className="story">
                            <div className="profile-pic">
                                <img
                                    src="https://images.unsplash.com/photo-1656524137248-f4e407be2c51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1248&q=80"
                                    alt=""
                                />
                            </div>
                            <p className="name">Alex Simpson </p>
                        </div>
                        <div className="story">
                            <div className="profile-pic">
                                <img
                                    src="https://images.unsplash.com/photo-1656576413714-b3e5a3d2aab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt=""
                                />
                            </div>
                            <p className="name">Yena Kahalid </p>
                        </div>
                        <div className="story">
                            <div className="profile-pic">
                                <img
                                    src="https://images.unsplash.com/photo-1656473031961-9d5d9ee19f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt=""
                                />
                            </div>
                            <p className="name">Anny Malasi John</p>
                        </div>
                    </div>
                    {/* END OF STORIES */}

                    <form
                        action=""
                        className="create-post d-flex justify-content-between align-items-center"
                    >
                        <div className="profile-pic">
                            <img
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fevtlnz66q7j61.jpg%3Fwidth%3D960%26crop%3Dsmart%26auto%3Dwebp%26s%3Dc118a6a2630e2c9a2b9412a20c8bc54f19b087dc&f=1&nofb=1"
                                alt=""
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="What's on your mind, Diana?"
                            id="create-post"
                            className="border-0 ps-3 me-3 ms-3"
                        />
                        <input
                            type="submit"
                            value="Post"
                            className="btn btn-primary"
                        />
                    </form>

                    {/* FEEDS */}
                    <div className="feeds">
                        {/* FEED 1 */}
                        <div className="feed">
                            <div className="head">
                                <div className="user">
                                    <div className="profile-pic">
                                        <img
                                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fevtlnz66q7j61.jpg%3Fwidth%3D960%26crop%3Dsmart%26auto%3Dwebp%26s%3Dc118a6a2630e2c9a2b9412a20c8bc54f19b087dc&f=1&nofb=1"
                                            alt=""
                                        />
                                    </div>
                                    <div className="info">
                                        <h3>Diana Ayi</h3>
                                        <span>Dubai, 15 mins ago</span>
                                    </div>
                                </div>
                                <span className="edit">
                                    <UilEllipsisH />
                                </span>
                            </div>

                            <div className="photo">
                                <img
                                    src="https://i.pinimg.com/564x/10/90/67/109067a205537f026067ced539c51457.jpg"
                                    alt=""
                                />
                            </div>

                            <div className="action-buttons">
                                <div className="interaction-buttons d-flex gap-4">
                                    <span>
                                        <UilHeart />
                                    </span>
                                    <span>
                                        <UilCommentDots />
                                    </span>
                                    <span>
                                        <UilShare />
                                    </span>
                                </div>
                                <div className="bookmark">
                                    <span>
                                        <UilBookmark />
                                    </span>
                                </div>
                            </div>

                            <div className="liked-by">
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656576413714-b3e5a3d2aab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                </span>
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656437660370-4e8886a0e8ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                        alt=""
                                    />
                                </span>
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656354798706-bc0c3b99f291?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                </span>

                                <p>
                                    Liked by <b>Erest Achivers</b> and
                                    <b> 2,325 others</b>
                                </p>
                            </div>

                            <div className="caption">
                                <p>
                                    <b>Diana Ayi </b>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Molestias, impedit!
                                    <span className="hash-tag"> #catandme</span>
                                </p>
                            </div>

                            <div className="comments text-muted">
                                View all 277 comments
                            </div>
                        </div>
                        {/* END OF FEED */}

                        {/* FEED 2 */}
                        <div className="feed">
                            <div className="head">
                                <div className="user">
                                    <div className="profile-pic">
                                        <img
                                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fevtlnz66q7j61.jpg%3Fwidth%3D960%26crop%3Dsmart%26auto%3Dwebp%26s%3Dc118a6a2630e2c9a2b9412a20c8bc54f19b087dc&f=1&nofb=1"
                                            alt=""
                                        />
                                    </div>
                                    <div className="info">
                                        <h3>Diana Ayi</h3>
                                        <span>Dubai, 15 mins ago</span>
                                    </div>
                                </div>
                                <span className="edit">
                                    <UilEllipsisH />
                                </span>
                            </div>

                            <div className="photo">
                                <img
                                    src="https://i.pinimg.com/564x/9c/93/6e/9c936ea01e4d0d679135d4461190ef9f.jpg"
                                    alt=""
                                />
                            </div>

                            <div className="action-buttons">
                                <div className="interaction-buttons d-flex gap-4">
                                    <span>
                                        <UilHeart />
                                    </span>
                                    <span>
                                        <UilCommentDots />
                                    </span>
                                    <span>
                                        <UilShare />
                                    </span>
                                </div>
                                <div className="bookmark">
                                    <span>
                                        <UilBookmark />
                                    </span>
                                </div>
                            </div>

                            <div className="liked-by">
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656576413714-b3e5a3d2aab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                </span>
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656437660370-4e8886a0e8ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                        alt=""
                                    />
                                </span>
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656354798706-bc0c3b99f291?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                </span>

                                <p>
                                    Liked by <b>Erest Achivers</b> and
                                    <b> 2,325 others</b>
                                </p>
                            </div>

                            <div className="caption">
                                <p>
                                    <b>Diana Ayi </b>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Molestias, impedit!
                                    <span className="hash-tag"> #catandme</span>
                                </p>
                            </div>

                            <div className="comments text-muted">
                                View all 277 comments
                            </div>
                        </div>
                        {/* END OF FEED */}

                        {/* FEED 3 */}
                        <div className="feed">
                            <div className="head">
                                <div className="user">
                                    <div className="profile-pic">
                                        <img
                                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fevtlnz66q7j61.jpg%3Fwidth%3D960%26crop%3Dsmart%26auto%3Dwebp%26s%3Dc118a6a2630e2c9a2b9412a20c8bc54f19b087dc&f=1&nofb=1"
                                            alt=""
                                        />
                                    </div>
                                    <div className="info">
                                        <h3>Diana Ayi</h3>
                                        <span>Dubai, 15 mins ago</span>
                                    </div>
                                </div>
                                <span className="edit">
                                    <UilEllipsisH />
                                </span>
                            </div>

                            <div className="photo">
                                <img
                                    src="https://i.pinimg.com/564x/16/6f/ff/166ffffd28f297ae422c7575b1644519.jpg"
                                    alt=""
                                />
                            </div>

                            <div className="action-buttons">
                                <div className="interaction-buttons d-flex gap-4">
                                    <span>
                                        <UilHeart />
                                    </span>
                                    <span>
                                        <UilCommentDots />
                                    </span>
                                    <span>
                                        <UilShare />
                                    </span>
                                </div>
                                <div className="bookmark">
                                    <span>
                                        <UilBookmark />
                                    </span>
                                </div>
                            </div>

                            <div className="liked-by">
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656576413714-b3e5a3d2aab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                </span>
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656437660370-4e8886a0e8ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                        alt=""
                                    />
                                </span>
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656354798706-bc0c3b99f291?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                </span>

                                <p>
                                    Liked by <b>Erest Achivers</b> and
                                    <b> 2,325 others</b>
                                </p>
                            </div>

                            <div className="caption">
                                <p>
                                    <b>Diana Ayi </b>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Molestias, impedit!
                                    <span className="hash-tag"> #catandme</span>
                                </p>
                            </div>

                            <div className="comments text-muted">
                                View all 277 comments
                            </div>
                        </div>
                        {/* END OF FEED */}

                        {/* FEED 4 */}
                        <div className="feed">
                            <div className="head">
                                <div className="user">
                                    <div className="profile-pic">
                                        <img
                                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fevtlnz66q7j61.jpg%3Fwidth%3D960%26crop%3Dsmart%26auto%3Dwebp%26s%3Dc118a6a2630e2c9a2b9412a20c8bc54f19b087dc&f=1&nofb=1"
                                            alt=""
                                        />
                                    </div>
                                    <div className="info">
                                        <h3>Diana Ayi</h3>
                                        <span>Dubai, 15 mins ago</span>
                                    </div>
                                </div>
                                <span className="edit">
                                    <UilEllipsisH />
                                </span>
                            </div>

                            <div className="photo">
                                <img
                                    src="https://i.pinimg.com/564x/70/3d/b3/703db3b8c8252df059eba707c189389e.jpg"
                                    alt=""
                                />
                            </div>

                            <div className="action-buttons">
                                <div className="interaction-buttons d-flex gap-4">
                                    <span>
                                        <UilHeart />
                                    </span>
                                    <span>
                                        <UilCommentDots />
                                    </span>
                                    <span>
                                        <UilShare />
                                    </span>
                                </div>
                                <div className="bookmark">
                                    <span>
                                        <UilBookmark />
                                    </span>
                                </div>
                            </div>

                            <div className="liked-by">
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656576413714-b3e5a3d2aab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                </span>
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656437660370-4e8886a0e8ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                        alt=""
                                    />
                                </span>
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656354798706-bc0c3b99f291?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                </span>

                                <p>
                                    Liked by <b>Erest Achivers</b> and
                                    <b> 2,325 others</b>
                                </p>
                            </div>

                            <div className="caption">
                                <p>
                                    <b>Diana Ayi </b>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Molestias, impedit!
                                    <span className="hash-tag"> #catandme</span>
                                </p>
                            </div>

                            <div className="comments text-muted">
                                View all 277 comments
                            </div>
                        </div>
                        {/* END OF FEED */}

                        {/* FEED 5 */}
                        <div className="feed">
                            <div className="head">
                                <div className="user">
                                    <div className="profile-pic">
                                        <img
                                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fevtlnz66q7j61.jpg%3Fwidth%3D960%26crop%3Dsmart%26auto%3Dwebp%26s%3Dc118a6a2630e2c9a2b9412a20c8bc54f19b087dc&f=1&nofb=1"
                                            alt=""
                                        />
                                    </div>
                                    <div className="info">
                                        <h3>Diana Ayi</h3>
                                        <span>Dubai, 15 mins ago</span>
                                    </div>
                                </div>
                                <span className="edit">
                                    <UilEllipsisH />
                                </span>
                            </div>

                            <div className="photo">
                                <img
                                    src="https://i.pinimg.com/564x/ba/68/2b/ba682bfed2fbb0337cbabcd760c1f43a.jpg"
                                    alt=""
                                />
                            </div>

                            <div className="action-buttons">
                                <div className="interaction-buttons d-flex gap-4">
                                    <span>
                                        <UilHeart />
                                    </span>
                                    <span>
                                        <UilCommentDots />
                                    </span>
                                    <span>
                                        <UilShare />
                                    </span>
                                </div>
                                <div className="bookmark">
                                    <span>
                                        <UilBookmark />
                                    </span>
                                </div>
                            </div>

                            <div className="liked-by">
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656576413714-b3e5a3d2aab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                </span>
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656437660370-4e8886a0e8ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                        alt=""
                                    />
                                </span>
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656354798706-bc0c3b99f291?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                </span>

                                <p>
                                    Liked by <b>Erest Achivers</b> and
                                    <b> 2,325 others</b>
                                </p>
                            </div>

                            <div className="caption">
                                <p>
                                    <b>Diana Ayi </b>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Molestias, impedit!
                                    <span className="hash-tag"> #catandme</span>
                                </p>
                            </div>

                            <div className="comments text-muted">
                                View all 277 comments
                            </div>
                        </div>
                        {/* END OF FEED */}

                        {/* FEED 6 */}
                        <div className="feed">
                            <div className="head">
                                <div className="user">
                                    <div className="profile-pic">
                                        <img
                                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fevtlnz66q7j61.jpg%3Fwidth%3D960%26crop%3Dsmart%26auto%3Dwebp%26s%3Dc118a6a2630e2c9a2b9412a20c8bc54f19b087dc&f=1&nofb=1"
                                            alt=""
                                        />
                                    </div>
                                    <div className="info">
                                        <h3>Diana Ayi</h3>
                                        <span>Dubai, 15 mins ago</span>
                                    </div>
                                </div>
                                <span className="edit">
                                    <UilEllipsisH />
                                </span>
                            </div>

                            <div className="photo">
                                <img
                                    src="https://i.pinimg.com/originals/03/2e/37/032e379658ddee06e5aeba6675bb5e69.gif"
                                    alt=""
                                />
                            </div>

                            <div className="action-buttons">
                                <div className="interaction-buttons d-flex gap-4">
                                    <span>
                                        <UilHeart />
                                    </span>
                                    <span>
                                        <UilCommentDots />
                                    </span>
                                    <span>
                                        <UilShare />
                                    </span>
                                </div>
                                <div className="bookmark">
                                    <span>
                                        <UilBookmark />
                                    </span>
                                </div>
                            </div>

                            <div className="liked-by">
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656576413714-b3e5a3d2aab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                </span>
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656437660370-4e8886a0e8ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                        alt=""
                                    />
                                </span>
                                <span>
                                    <img
                                        src="https://images.unsplash.com/photo-1656354798706-bc0c3b99f291?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                </span>

                                <p>
                                    Liked by <b>Erest Achivers</b> and
                                    <b> 2,325 others</b>
                                </p>
                            </div>

                            <div className="caption">
                                <p>
                                    <b>Diana Ayi </b>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Molestias, impedit!
                                    <span className="hash-tag"> #catandme</span>
                                </p>
                            </div>

                            <div className="comments text-muted">
                                View all 277 comments
                            </div>
                        </div>
                        {/* END OF FEED */}
                    </div>
                    {/* END OF FEEDS */}
                </div>
                {/* END OF MIDDLE */}

                {/* RIGHT */}
                <div className="right">
                    <div className="messages">
                        <div className="heading">
                            <h4>Messages</h4>
                            <UilEdit />
                        </div>

                        {/* SEARCH BAR */}
                        <div className="search-bar">
                            <UilSearch />
                            <input
                                type="search"
                                placeholder="Search messages"
                                id="message-search"
                            />
                        </div>

                        {/* MESSAGES CATEGORY */}
                        <div className="category">
                            <h6 className="active">Primary</h6>
                            <h6>General</h6>
                            <h6 className="message-requests">Request(6)</h6>
                        </div>

                        {/* MESSAGE */}
                        <div className="message">
                            <div className="profile-pic">
                                <img
                                    src="https://i.pinimg.com/736x/85/e3/ad/85e3ad8d0b8965907397f956ce6b6071.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="message-body">
                                <h5>Endy Quist</h5>
                                <p className="text-muted">Val bro</p>
                            </div>
                        </div>

                        {/* MESSAGE */}
                        <div className="message">
                            <div className="profile-pic">
                                <img
                                    src="https://i.pinimg.com/564x/12/29/7b/12297b2b304f6291f81c7e20a149611f.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="message-body">
                                <h5>Endy Quist</h5>
                                <p className="text-muted">Val bro</p>
                            </div>
                        </div>

                        {/* MESSAGE */}
                        <div className="message">
                            <div className="profile-pic">
                                <img
                                    src="https://i.pinimg.com/564x/67/63/b2/6763b2435a6032141efa4dc1cfc228e7.jpg"
                                    alt=""
                                />
                                <div className="active"></div>
                            </div>
                            <div className="message-body">
                                <h5>Endy Quist</h5>
                                <p className="text-bold">Want val Yanji?</p>
                            </div>
                        </div>

                        {/* MESSAGE */}
                        <div className="message">
                            <div className="profile-pic">
                                <img
                                    src="https://i.pinimg.com/564x/92/7b/c6/927bc6fb4032e684485930768f0497df.jpg"
                                    alt=""
                                />
                                <div className="active"></div>
                            </div>
                            <div className="message-body">
                                <h5>Endy Quist</h5>
                                <p className="text-bold">Val bro</p>
                            </div>
                        </div>

                        {/* MESSAGE */}
                        <div className="message">
                            <div className="profile-pic">
                                <img
                                    src="https://i.pinimg.com/564x/ed/c4/00/edc400e4f421f2ed3cfb23fe97ba44ed.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="message-body">
                                <h5>Endy Quist</h5>
                                <p className="text-muted">Val bro</p>
                            </div>
                        </div>
                    </div>
                    {/* END OF MESSAGES */}

                    {/* FRIEND REQUEST */}
                    <div className="friend-request mt-3">
                        <h4 className="my-3">Request</h4>
                        <div className="request">
                            <div className="info">
                                <div className="profile-pic">
                                    <img
                                        src="https://i.pinimg.com/736x/3c/07/31/3c07311c4d8e30122c630f808b8efa7b.jpg"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h5>Hajia Bintu</h5>
                                    <p className="text-muted">
                                        8 mutual friends
                                    </p>
                                </div>
                            </div>
                            <div className="action d-flex">
                                <button className="btn btn-primary">
                                    Accept
                                </button>
                                <button className="btn border-dark">
                                    Decline
                                </button>
                            </div>
                        </div>

                        <div className="request">
                            <div className="info">
                                <div className="profile-pic">
                                    <img
                                        src="https://i.pinimg.com/236x/05/7f/41/057f4155611ace6896d0578b8220f7bb.jpg"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h5>Hajia Bintu</h5>
                                    <p className="text-muted">
                                        8 mutual friends
                                    </p>
                                </div>
                            </div>
                            <div className="action d-flex">
                                <button className="btn btn-primary">
                                    Accept
                                </button>
                                <button className="btn border-dark">
                                    Decline
                                </button>
                            </div>
                        </div>
                        <div className="request">
                            <div className="info">
                                <div className="profile-pic">
                                    <img
                                        src="https://i.pinimg.com/236x/72/a3/20/72a32094e59e502b55a2fc7aa1433884.jpg"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h5>Hajia Bintu</h5>
                                    <p className="text-muted">
                                        8 mutual friends
                                    </p>
                                </div>
                            </div>
                            <div className="action d-flex">
                                <button className="btn btn-primary">
                                    Accept
                                </button>
                                <button className="btn border-dark">
                                    Decline
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END OF RIGHT */}
            </div>
        </main>
    );
};

export default Sidebar;
