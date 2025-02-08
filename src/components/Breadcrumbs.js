import { Link, useLocation } from "react-router-dom";

const formatBreadcrumb = (segment) => {
  const specialCases = ["pcb", "pcm", "iit"];

  return segment
    .split("-")
    .map((word) =>
      specialCases.includes(word.toLowerCase())
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const styles = {
    breadcrumbs: {
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
      marginLeft: "5%",
    },
    link: {
      color: "#0070f3",
      textDecoration: "none",
    },
    separator: {
      margin: "0 5px",
    },
    active: {
      fontWeight: "normal",
    },
  };

  return (
    <nav style={styles.breadcrumbs}>
      <ul style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}>
        <li>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          const displayName = formatBreadcrumb(segment);

          return (
            <li key={path} style={{ display: "flex", alignItems: "center" }}>
              <span style={styles.separator}>{">"}</span>
              {isLast ? (
                <span style={styles.active}>{displayName}</span>
              ) : (
                <Link to={path} style={styles.link}>
                  {displayName}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
