"use client";

import React, { useState } from "react";
import { FaVolumeLow, FaVolumeXmark } from "react-icons/fa6";

const SoundToggle = () => {
  const [isSoundOn, setIsSoundOn] = useState(false);

  const renderSoundOnButton = (
    <button
      onClick={() => setIsSoundOn((prev) => !prev)}
      className="flex items-center justify-center w-8 text-xs rounded-md text-muted-foreground bg-secondary ">
      <FaVolumeXmark />
    </button>
  );

  const renderSoundOffButton = (
    <button
      onClick={() => setIsSoundOn((prev) => !prev)}
      className="flex items-center justify-center w-8 text-xs rounded-md text-primary bg-secondary ">
      <FaVolumeLow />
    </button>
  );

  return isSoundOn ? renderSoundOnButton : renderSoundOffButton;
};

export default SoundToggle;
