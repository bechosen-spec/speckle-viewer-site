import {
    Viewer,
    DefaultViewerParams,
    SpeckleLoader,
    UrlHelper,
    CameraController,
    SelectionExtension
  } from "@speckle/viewer";
  
  async function main() {
    // Get the HTML container
    const container = document.getElementById("renderer");
  
    if (!container) {
      console.error("Renderer container not found");
      return;
    }
  
    // Configure the viewer parameters
    const params = DefaultViewerParams;
    params.showStats = true;
    params.verbose = true;
  
    // Create a new viewer instance
    const viewer = new Viewer(container, params);
  
    // Initialize the viewer
    await viewer.init();
  
    // Add the stock camera controller extension
    viewer.createExtension(CameraController);
  
    // Add the selection extension for extra interactivity
    viewer.createExtension(SelectionExtension);
  
    // Create a loader for the Speckle stream (replace with your model's URL)
    const urls = await UrlHelper.getResourceUrls(
      "https://app.speckle.systems/projects/7591c56179/models/32213f5381"
    );
  
    // Load the model into the viewer
    for (const url of urls) {
      const loader = new SpeckleLoader(viewer.getWorldTree(), url, "");
      await viewer.loadObject(loader, true);
    }
  }
  
  // Run the main function
  main();
  