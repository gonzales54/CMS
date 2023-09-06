#!/usr/bin/env node

import { writeFileSync, existsSync, readFileSync, renameSync } from "fs";
import { join } from "path";

import { copySync } from "fs-extra";

interface ReturnCreateTargetPathAndComponentNameTypes {
  skeltonPath: string;
  basePath: string;
  ComponentsName: string[];
}

interface ReturnRewriteComponentsFileContentTypes {
  reWritedComponentContent: string;
  reWritedTestComponentContent: string;
  reWritedStoryComponentContent: string;
  reWritedEntryComponent: string;
}

function CreateTargetPathAndComponentName(argv: string[]): ReturnCreateTargetPathAndComponentNameTypes {
  const skeltonPath: string = join(process.cwd(), "GenerateComponent", "skel");
  const basePath: string = join(process.cwd(), "src", "components", argv[2]);

  const ComponentsName: string[] = argv.slice(3);


  return {
    skeltonPath, basePath, ComponentsName
  }
}

function RewriteComponentsFileContent(skeltonPath: string, componentName: string): ReturnRewriteComponentsFileContentTypes {
  const skeltonComponent: string = readFileSync(join(skeltonPath, "Component.tsx"), 'utf-8');
  const skeltonTestComponent: string = readFileSync(join(skeltonPath, "Component.test.tsx"), 'utf-8');
  const skeltonStoryComponent: string = readFileSync(join(skeltonPath, "Component.stories.tsx"), 'utf-8');
  const skeltonEntryComponent: string = readFileSync(join(skeltonPath, "index.tsx"), 'utf-8');

  const reWritedComponentContent: string = skeltonComponent.replace(/(Component|component)/g, componentName);
  const reWritedTestComponentContent: string = skeltonTestComponent.replace(/(Component)/g, componentName);
  const reWritedStoryComponentContent: string = skeltonStoryComponent.replace(/(Component)/g, componentName);
  const reWritedEntryComponent: string = skeltonEntryComponent.replace(/(Component)/g, componentName)

  return { reWritedComponentContent, reWritedTestComponentContent, reWritedStoryComponentContent, reWritedEntryComponent };
}

function CopyComponensFile(filePath: string, skeltonPath: string, componentName:  string): void {
  copySync(skeltonPath, filePath);
  
  const { reWritedComponentContent, reWritedTestComponentContent, reWritedStoryComponentContent, reWritedEntryComponent } = RewriteComponentsFileContent(skeltonPath, componentName);

  const beforeRenameComponentFile: string = join(filePath, "Component.tsx");
  const beforeRenameComponentTestFile: string = join(filePath, "Component.test.tsx");
  const beforeRenameComponentStoryFile: string = join(filePath, "Component.stories.tsx");

  const componentFile: string = join(filePath, `${componentName}.tsx`);
  const componentTestFile: string = join(filePath, `${componentName}.test.tsx`);
  const componentStoryFile: string = join(filePath, `${componentName}.stories.tsx`);
  const componentEntryFile: string = join(filePath, 'index.tsx');

  renameSync(beforeRenameComponentFile, componentFile);
  renameSync(beforeRenameComponentTestFile, componentTestFile);
  renameSync(beforeRenameComponentStoryFile, componentStoryFile);

  writeFileSync(componentFile, reWritedComponentContent);
  writeFileSync(componentTestFile, reWritedTestComponentContent);
  writeFileSync(componentStoryFile, reWritedStoryComponentContent);
  writeFileSync(componentEntryFile, reWritedEntryComponent);
}

function GenerateComponent(argv: string[]): void {
  const { skeltonPath, basePath, ComponentsName } = CreateTargetPathAndComponentName(argv);

  ComponentsName.forEach((component: string) => {
    const componentPath: string = join(basePath, component);

    if(existsSync(componentPath)) {
      console.log("The component is already exists.");
      return;
    }

    CopyComponensFile(componentPath, skeltonPath, component);
  });
}

GenerateComponent(process.argv)