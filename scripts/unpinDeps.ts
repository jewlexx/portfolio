import pkg from "../package.json";

const unpinDeps = (deps: Record<string, string>) => {
  const unpinnedDeps = Object.entries(deps).reduce((acc, [name, version]) => {
    if (version.startsWith("^")) {
      return { ...acc, [name]: `${version}` };
    }

    return { ...acc, [name]: `^${version}` };
  }, {});

  return unpinnedDeps;
};

const unpinnedDeps = unpinDeps(pkg.dependencies);
const unpinnedDevDeps = unpinDeps(pkg.devDependencies);

const newPkg = {
  ...pkg,
  dependencies: unpinnedDeps,
  devDependencies: unpinnedDevDeps,
};

console.log(JSON.stringify(newPkg, null, 2));
