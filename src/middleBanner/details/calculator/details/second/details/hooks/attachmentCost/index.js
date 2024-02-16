import { useState, useEffect } from 'react';

const useAttachmentCost = (initialQuantity, selectedOption) => {
  const [attachmentCost, setAttachmentCost] = useState(0);

  useEffect(() => {
    if (selectedOption === 'yes') {
      setAttachmentCost(initialQuantity * 3);
    } else if (selectedOption === 'no') {
      setAttachmentCost(0);
    } else {
      setAttachmentCost(0);
    }
  }, [selectedOption, initialQuantity]);

  return attachmentCost;
};

export default useAttachmentCost;