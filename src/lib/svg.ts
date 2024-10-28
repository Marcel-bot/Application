import { Bezier, Point } from '@/lib/types';

function parseNum(numStr: string): number {
  return parseInt(numStr);
}

export function parsePathToBeziers(pathString: string): Bezier[] {
  const commandRe = /([A-Za-z])/;
  const numberRe = /-?[\d.]+/g;

  const commands = pathString
    .split(commandRe)
    .map((cmd) => cmd.trim())
    .filter((cmd) => cmd.length > 0);

  const beziers: Bezier[] = [];
  let currentPosition: Point | null = null;

  let i = 0;
  while (i < commands.length) {
    const command = commands[i];

    if (command === 'M') {
      const args = commands[i + 1].match(numberRe)?.map(parseNum) || [];
      currentPosition = {
        x: args[0],
        y: args[1]
      };
      i += 2;
    } else if (command === 'C') {
      const args = commands[i + 1].match(numberRe)?.map(parseNum) || [];
      for (let j = 0; j + 5 < args.length; j += 6) {
        const control1: Point = {
          x: args[j],
          y: args[j + 1]
        };

        const control2: Point = {
          x: args[j + 2],
          y: args[j + 3]
        };

        const end: Point = {
          x: args[j + 4],
          y: args[j + 5]
        };

        if (currentPosition) {
          beziers.push({
            start: currentPosition,
            control1,
            control2,
            end: end
          });

          currentPosition = end;
        }
      }
      i += 2;
    } else if (command === 'L') {
      const args = commands[i + 1].match(numberRe)?.map(parseNum) || [];
      const end: Point = {
        x: args[0],
        y: args[1]
      };

      if (currentPosition) {
        const control1: Point = {
          x: Math.round(currentPosition.x + 0.33 * (end.x - currentPosition.x)),
          y: Math.round(currentPosition.y + 0.33 * (end.y - currentPosition.y))
        };
        
        const control2: Point = {
          x: Math.round(currentPosition.x + 0.66 * (end.x - currentPosition.x)),
          y: Math.round(currentPosition.y + 0.66 * (end.y - currentPosition.y))
        };

        beziers.push({
          start: currentPosition,
          control1,
          control2,
          end
        });

        currentPosition = end;
      }

      i += 2;
    } else {
      i += 1;
    }
  }

  return beziers;
}
