export const Box = () => {
  return (
    <div>
      <div>John Cena</div>
      <div
        style={{
          backgroundColor: "#F2F2F2",
          borderRadius: "48px",
          width: "128px",
          height: "40px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#FFFFFF",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "1000px",
            color: "#000000",
          }}
        >
          -
        </div>
        <div
          style={{
            color: "#000000",
            width: "40px",
            height: "27px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4px",
            gap: "8px",
            fontSize: "18px",
            width: "40px",
            height: "27px",
          }}
        >
          1
        </div>
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#FFFFFF",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "1000px",
            color: "#000000",
          }}
        >
          +
        </div>
      </div>
    </div>
  );
};
