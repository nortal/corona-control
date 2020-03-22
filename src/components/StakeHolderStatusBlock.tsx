import {StockStatus} from "../api/model/ResourceStatusPayload";
import React from 'react';
import Typography from "@material-ui/core/Typography";

const containerStyle = {
    display: "table",
    width: "100%",
    height: "50px",
    marginTop: "15px"
};

const horizontalCellStyle = {
    display: "table-cell",
    verticalAlign: "middle",
};

const rowStyle = {
    display: "table-row",
};

const verticalStatusLineStyle = {
    height: "100%",
    width: "5px",
    marginRight: "10px"
};

const subtitle = {
    fontSize: 13
};

const subtitleBlueLink = {
    fontSize: 13,
    color: "#4d4dff"
};

const backGroundColorMap = new Map<StockStatus, string>([
    [StockStatus.OK, 'green'],
    [StockStatus.LOW, 'orange'],
    [StockStatus.CRITICAL, 'red'],
    [StockStatus.OUT_OF_STOCK, 'gray'],
]);

interface StakeHolderStatusBlockProps {
    name: string,
    contact: string,
    stockStatus: StockStatus
}


const StakeHolderStatusBlock = ({name, contact, stockStatus} : StakeHolderStatusBlockProps) => {
  return <div style={containerStyle}>
      <div style={rowStyle}>
        <div style={horizontalCellStyle}>
            <div style={{...verticalStatusLineStyle, backgroundColor: backGroundColorMap.get(stockStatus)}} />
        </div>
          <div style={horizontalCellStyle}>
              <Typography style={subtitle}>
                  {name}
              </Typography>
              <Typography style={subtitleBlueLink}>
                  {contact}
              </Typography>
          </div>
      </div>
  </div>
};

export default StakeHolderStatusBlock;