# Project Blueprint: Money Flow Dashboard

## Overview
This is a financial dashboard application designed to provide a comprehensive overview of various asset classes, including commodities, stocks, and cryptocurrencies. It presents real-time data in an intuitive and visually appealing interface.

## Core Features & Design
*   **Theme:** Dark and Light mode, toggleable by the user.
*   **Layout:** A main content area with a sidebar for navigation.
*   **Asset Categories:**
    *   Commodities
    *   US Stocks
    *   Korean Stocks
    *   Crypto
*   **Styling:** Utilizes Tailwind CSS for a modern, responsive design. Font Awesome is used for icons.

## Current Task: UI Update based on User Feedback

### Plan
1.  **Update Header Section:**
    *   Change the main title to "요약 대시보드" (Summary Dashboard).
    *   Add a subtitle: "주요 디지털자산들의 가격 현황 및 주요 지표" (Price status and key indicators of major digital assets) with an update timestamp.
    *   Implement three horizontal indicator cards on the right side of the header for:
        *   "원/달러 환율" (Won/Dollar Exchange Rate)
        *   "업비트 USDT" (Upbit USDT)
        *   "김치프리미엄 (USDT)" (Kimchi Premium (USDT))
2.  **Address Asset Category Layout:**
    *   The user requested a change to the asset category layout.
    *   The request was ambiguous, stating the current layout is horizontal but they want vertical, while the code shows a vertical layout.
    *   **Action:** Implement the clear header changes first. Then, ask the user for clarification on the desired layout for the asset categories.
