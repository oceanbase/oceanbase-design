import type { IShape } from '@ant-design/charts';
import type { GAnimateCfg } from '@antv/g2/esm/interface';
import type { AnimateExtraCfg } from '@antv/g2/esm/animate/interface';
import type { PathCommand } from '@antv/g2/esm/dependents';
import { interpolate } from 'd3-interpolate';
import { isEqual, isNumber } from 'lodash';

export function pathToString(path: PathCommand[]) {
  return path.map(command => `${command[0]}${command.slice(1).join(',')}`).join(' ');
}

/**
 * @ignore
 * 时序图更新动画
 * @param shape 图形
 * @param animateCfg
 * @param cfg
 */
export function pathSlide(shape: IShape, animateCfg: GAnimateCfg, cfg: AnimateExtraCfg) {
  const { toAttrs } = cfg;
  const { path = [], ...restToAttrs } = (toAttrs as { path: PathCommand[] }) || {};
  if (shape.get('type') === 'path') {
    let fromPath: PathCommand[] = shape.attr('path') || [];
    let toPath = path;
    // calculate offsetX of fromPath and toPath
    const fromSecondCommand = (fromPath[1] || []) as PathCommand;
    const restoreToFirstCommand = [...(toPath[0] || [])] as PathCommand;
    const toFirstCommand = (toPath[0] || []) as PathCommand;
    const fromSecondX = fromSecondCommand[fromSecondCommand.length - 2] as number;
    const toFirstX = toFirstCommand[toFirstCommand.length - 2] as number;
    const offsetX = isNumber(fromSecondX) && isNumber(toFirstX) ? fromSecondX - toFirstX : 0;

    // prepend command for toPath
    // toPath[0] = [...fromSecondCommand];
    // toPath[0][0] = ['L'];
    // toPath[0].forEach((_, index) => {
    //   if (index % 2 === 1) {
    //     toPath[0][index] = fromSecondX - offsetX;
    //   }
    // });

    const fromFirstCommand = (fromPath[0] || []) as PathCommand;
    const fromFirstX = fromFirstCommand[fromFirstCommand.length - 2] as number;
    const prepandCommand = [...fromFirstCommand] as PathCommand;
    prepandCommand[prepandCommand.length - 2] = fromFirstX - offsetX;
    toPath = [prepandCommand, ...toPath];

    // append command for fromPath
    const toLastSecondCommand = (toPath[toPath.length - 2] || []) as PathCommand;
    const toLastSecondX = toLastSecondCommand[toLastSecondCommand.length - 2] as number;
    // fromPath[fromPath.length - 1] = [...toLastSecondCommand];
    // fromPath[fromPath.length - 1][fromPath[fromPath.length - 1].length - 2] =
    //   toLastSecondX + offsetX;
    const toLastCommand = (toPath[toPath.length - 1] || []) as PathCommand;
    const toLastX = toLastCommand[toLastCommand.length - 2] as number;
    const toLastY = toLastCommand[toLastCommand.length - 1] as number;
    let appendCommand = ['L', toLastX + offsetX, toLastY] as PathCommand;
    // let appendCommand = [...toLastCommand] as PathCommand;
    // appendCommand[appendCommand.length - 2] = toLastX + offsetX;
    fromPath = [...fromPath, appendCommand];

    console.log(fromPath);
    console.log(toPath);
    console.log('=======');

    // update path to fromPath
    shape.attr({
      path: fromPath,
    });
    // animate to toPath
    shape.animate(
      {
        path: toPath,
      },
      {
        ...animateCfg,
        callback: () => {
          // Remove prepend command when animation is completed
          const restoreToPath = toPath.slice(1);
          restoreToPath[0] = restoreToFirstCommand;
          console.log(restoreToPath);
          shape.attr({
            path: restoreToPath,
          });
          if (animateCfg.callback) {
            animateCfg.callback();
          }
        },
      }
    );
  }

  // if (shape.get('type') === 'path') {
  //   shape.animate(ratio => {
  //     // shape.translate(-ratio * length, 0);
  //     // const matrix = shape.getMatrix();
  //     // const newMatrix = ext.transform(matrix, [['t', -ratio * length, 0]]);
  //     // console.log(-ratio * length);
  //     // console.log(shape);
  //     // console.log(toAttrs.path);
  //     const currentPath = [];
  //     let interf;
  //     for (let i = 0; i < toPath.length; i++) {
  //       const fromPathPoint = fromPath[i];
  //       const toPathPoint = toPath[i];
  //       const cPathPoint = [];
  //       for (let j = 0; j < toPathPoint.length; j++) {
  //         if (
  //           fromPathPoint &&
  //           fromPathPoint[j] &&
  //           isNumber(fromPathPoint[j]) &&
  //           isNumber(toPathPoint[j]) &&
  //           // Arc boolean flags
  //           !(toPathPoint[0] === 'A' && (j === 4 || j === 5))
  //         ) {
  //           // interf = interpolate(fromPathPoint[j], toPathPoint[j]);
  //           // cPathPoint.push(interf(ratio));
  //           // console.log(ratio);
  //           // console.log(fromPathPoint[j] + ratio * (toPathPoint[j] - fromPathPoint[j]));
  //           // console.log('=======');
  //           cPathPoint.push(fromPathPoint[j] + ratio * (toPathPoint[j] - fromPathPoint[j]));
  //         } else {
  //           cPathPoint.push(toPathPoint[j]);
  //         }
  //       }
  //       // console.log(fromPathPoint);
  //       // console.log(toPathPoint);
  //       // console.log(toPathPoint);
  //       // console.log('========');
  //       currentPath.push(cPathPoint);
  //     }
  //     return {
  //       path: currentPath,
  //       // matrix: newMatrix,
  //     };
  //   }, animateCfg);
  // }

  shape.animate(restToAttrs, animateCfg);
}
