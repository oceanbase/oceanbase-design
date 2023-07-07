export interface IDockProps {
  style?: React.CSSProperties;
  adjust?: number[];
}

export const Dock: Record<string, IDockProps> = ((size: number) => {
  return {
    top: {
      adjust: [1, -1, 0, 0],
      style: {
        top: -size / 2,
        height: size,
        left: 0,
        right: 0,
        cursor: 'ns-resize',
      },
    },
    bottom: {
      adjust: [0, 1, 0, 0],
      style: {
        bottom: -size / 2,
        height: size,
        left: 0,
        right: 0,
        cursor: 'ns-resize',
      },
    },
    left: {
      adjust: [0, 0, 1, -1],
      style: {
        left: -size / 2,
        width: size,
        top: 0,
        bottom: 0,
        cursor: 'ew-resize',
      },
    },
    right: {
      adjust: [0, 0, 0, 1],
      style: {
        right: -size / 2,
        width: size,
        top: 0,
        bottom: 0,
        cursor: 'ew-resize',
      },
    },
    topLeft: {
      adjust: [1, -1, 1, -1],
      style: {
        top: -size / 2,
        left: -size / 2,
        width: size,
        height: size,
        cursor: 'nwse-resize',
      },
    },
    topRight: {
      adjust: [1, -1, 0, 1],
      style: {
        top: -size / 2,
        right: -size / 2,
        width: size,
        height: size,
        cursor: 'nesw-resize',
      },
    },
    bottomLeft: {
      adjust: [0, 1, 1, -1],
      style: {
        bottom: -size / 2,
        left: -size / 2,
        width: size,
        height: size,
        cursor: 'nesw-resize',
      },
    },
    bottomRight: {
      adjust: [0, 1, 0, 1],
      style: {
        bottom: -size / 2,
        right: -size / 2,
        width: size,
        height: size,
        cursor: 'nwse-resize',
      },
    },
  };
})(8);
