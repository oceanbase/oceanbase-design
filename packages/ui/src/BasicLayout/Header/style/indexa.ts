import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    "@{prefix}": {
      position: "fixed",
      zIndex: "10",
      width: "100%",
      height: "48px",
      padding: "10px 24px",
      lineHeight: "48px",
      backgroundColor: token.colorBgLayout,
      boxShadow: "inset 0 -1px 0 0 #e2e8f3",
    },
    "@{prefix}-content": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: token.maxWidth,
      height: "100%",
      margin: "0 auto",
    },
    "@{prefix}-logo": {
      height: "72px",
      cursor: "pointer",
    },
    "@{prefix}-icon": {
      width: "52px",
      height: "48px",
      lineHeight: "48px",
      textAlign: "center",
      borderRight: "1px solid #e2e8f3",
      borderBottom: "1px solid #e2e8f3",
      cursor: "pointer",
      img: { height: "32px", marginTop: "8px" },
    },
    "@{prefix}-title": {
      margin: "0 16px",
    },
    "@{prefix}-extra": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    "@{prefix}-extra-item": {
      display: "inline-flex",
      fontSize: "12px",
      cursor: "pointer",
    },
    "@{prefix}-extra-icon-wrapper": {
      width: "28px",
      height: "28px",
      lineHeight: "28px",
      textAlign: "center",
      border: "0.88px solid #ced4e1",
      borderRadius: "14px",
    },
    "@{prefix}-extra-user-wrapper": {
      height: "28px",
      padding: "0 10px",
      lineHeight: "28px",
      border: "0.88px solid #ced4e1",
      borderRadius: "14px",
    },
    "@{prefix}-extra-user-icon": {
      marginRight: "6px",
      marginBottom: "-2px",
    },
    "@{prefix}-welcome": {
      color: "#fff",
      backgroundColor: "transparent",
      borderBottom: "none",
    },
    "@{prefixCls}-btn": {
      color: "#fff",
      backgroundColor: "rgba(255, 255, 255, 0.25)",
      border: "0.5px solid rgba(0, 0, 0, 0.1)",
    },
    "@{prefix}-about": {
      marginTop: "12px",
    },
    "@{prefix}-release-info": {
      marginTop: "20px",
      marginBottom: "50px",
    },
    "@{prefix}-copyright": {
      color: "#000",
      fontSize: "12px",
      opacity: "0.45",
    },
  };
});

export default useStyles;
