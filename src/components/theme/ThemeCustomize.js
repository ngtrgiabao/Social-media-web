import React from "react";
import themeCustomize from "./themeCustomize.css";

const ThemeCustomize = () => {
    return (
        <div className="customize-theme d-grid">
            <div className="card">
                <h2>Customize your view</h2>
                <p className="text-muted">
                    Manage your font size, color, and background.
                </p>

                {/* FONT SIZES */}
                <div className="font-size">
                    <h4>Font Size</h4>
                    <div>
                        <h6>Aa</h6>
                        <div className="choose-size d-flex justify-content-between align-items-center">
                            <span className="font-size-1"></span>
                            <span className="font-size-2"></span>
                            <span className="font-size-3 active"></span>
                            <span className="font-size-4"></span>
                            <span className="font-size-5"></span>
                        </div>
                        <h3>Aa</h3>
                    </div>
                </div>

                {/* PRIMARY COLORS */}
                <div className="color">
                    <h4>Color</h4>
                    <div className="choose-color d-flex justify-content-between align-items-center">
                        <span className="color-1 active"></span>
                        <span className="color-2"></span>
                        <span className="color-3"></span>
                        <span className="color-4"></span>
                        <span className="color-5"></span>
                    </div>
                </div>

                {/* BACKGROUND COLORS */}
                <div className="background">
                    <h4>Background</h4>
                    <div className="choose-bg d-flex justify-content-between align-items-center">
                        <div className="bg-1 active">
                            <span></span>
                            <h5 htmlFor="bg-1">Light</h5>
                        </div>
                        <div className="bg-2">
                            <span></span>
                            <h5>Dim</h5>
                        </div>
                        <div className="bg-3">
                            <span></span>
                            <h5 htmlFor="bg-3">Lights Out</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeCustomize;
