import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const SystemDetails = ({ name, system, storageMemory, processor, memory, videoBoard }) => (
  <S.WrapperSystemDetails>
    <h3>{name}</h3>
    <S.SystemContent>
      <S.SystemsInfo>
        <div>
          <h4>System</h4>
          <p>{system}</p>
        </div>
        <div>
          <h4>Processor</h4>
          <p>{processor}</p>
        </div>
        <div>
          <h4>Storage</h4>
          <p>{storageMemory}</p>
        </div>
      </S.SystemsInfo>
      <S.SystemMemory>
        <div>
          <h4>memory</h4>
          <p>{memory}</p>
        </div>
        <div>
          <h4>video board</h4>
          <p>{videoBoard}</p>
        </div>
      </S.SystemMemory>
    </S.SystemContent>
  </S.WrapperSystemDetails>
);

SystemDetails.propTypes = {
  name: PropTypes.string.isRequired,
  system: PropTypes.string.isRequired,
  storageMemory: PropTypes.string.isRequired,
  processor: PropTypes.string.isRequired,
  memory: PropTypes.string.isRequired,
  videoBoard: PropTypes.string.isRequired,
};

export default SystemDetails;
