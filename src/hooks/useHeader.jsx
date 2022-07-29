import { useEffect, useState } from "react";

export default function useHeader() {
    const [currentHeaderIndex, setCurrentHeaderIndex] = useState(0);

    return {setCurrentHeaderIndex, currentHeaderIndex};
}
