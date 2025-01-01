export function markFeatureUsage(featureName) {
  performance?.mark?.("mark_feature_usage", {
    detail: {
      feature: featureName
    }
  });
}
