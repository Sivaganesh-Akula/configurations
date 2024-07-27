/**
 * @example for
 *    allowUnreachableCode, allowUnusedLabels
 * @param featureFlag
 * @returns
 */
function newFeature(featureFlag: boolean): void {
  if (featureFlag) {
    console.log("New feature is enabled.");
    function checkNumbers(numbers: number[]) {
      // used label
      outerLoop: for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
          if (i === j) {
            continue outerLoop;
          }
          console.log(`Comparing ${numbers[i]} and ${numbers[j]}`);
        }
      }
      // unused label
      unusedLabel: {
        console.log("This block has an unused label.");
      }
    }
    checkNumbers([1, 2, 3]);
    return;
  }

  console.log("New feature is disabled.");
  return;

  // Unreachable code
  console.log("This will never be logged if featureFlag is false.");
}

newFeature(true);

declare const loggedInUsername: string;
const users = [
  { name: "Oby", age: 12 },
  { name: "Heera", age: 32 },
];
const loggedInUser = users.find((u) => u.name === loggedInUsername);

// strictNullChecks true throws error
// console.log(loggedInUser.age);

try {
  function fn(x: string) {
    return parseInt(x);
  }
  //useUnknownInCatchVariables -> Allow changing the type of the variable in a catch clause from any to unknown
} catch (err: unknown) {
  if (err instanceof Error) {
    console.log(err.message);
  }
}
// strictBindCallApply throws error
// const n2 = fn.call(undefined, false);

type StringOrNumberFunc = (ns: string | number) => void;
// strictFunctionTypes Unsafe assignment is prevented
// let func: StringOrNumberFunc = fn;

class UserAccount {
  name: string;
  accountType = "user";

  // strictPropertyInitialization throws error
  // email: string;
  address: string | undefined;

  constructor(name: string) {
    this.name = name;
    // Note that this.email is not set
  }

  getName() {
    return function () {
      // noImplicitThis -> Raise error on ‘this’ expressions with an implied ‘any’ type
      // return this.width * this.height;
    };
  }
}

// noImplicitAny -> issue an error when inferred any
// function fn2(s) {
//   console.log(s.subtr(3));
// }

// exactOptionalPropertyTypes
interface theme {
  value?: "dark" | "light";
}
// exactOptionalPropertyTypes throws error
// let themeUpdate: theme = { value: undefined};

// noFallthroughCasesInSwitch -> makes case break mandate;
const a: number = 6;
switch (a) {
  case 0:
    console.log("even");
  case 1:
    console.log("odd");
    break;
}

class Album {
  setup() {}
}

class MLAlbum extends Album {
  override setup() {}
}

// noImplicitOverride mandates override before function declaration;
// class SharedAlbum extends Album {
//   setup() {}
// }

// noImplicitReturns -> Will check all code paths in a function to ensure they return a value.
// function fn3(x: string): number {
//   if (x.length) {
//     return parseInt(x);
//   }
// }

// noPropertyAccessFromIndexSignature
interface GameSettings {
  // Known up-front properties
  speed: "fast" | "medium" | "slow";
  quality: "high" | "low";
  // Assume anything unknown to the interface
  // is a string.
  [key: string]: string;
}

const settings: GameSettings = {
  speed: "slow",
  quality: "low",
  name: "siva",
};
console.log(settings.speed);
// noPropertyAccessFromIndexSignature -> Property 'name' comes from an index signature, so it must be accessed with ['name']
// noUncheckedIndexedAccess -> will add undefined to any un-declared field in the type.
// console.log(settings.name);

// noUnusedParameters
const createKeyboard = (modelID: number) => {
  // noUnusedLocals
  const defaultModelID = 23;
  return { type: "keyboard" };
};
