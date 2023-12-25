import YMapComponentsProvider from "./YMapComponentsProvider";
import { YMapThemeContext as ThemeContextProps, YMapProps, YMapLayerProps, YMapControlsProps, YMapTileDataSourceProps, YMapListenerProps, YMapDefaultFeaturesLayerProps, YMapDefaultSchemeLayerProps, YMapCollection, YMapContainerProps, YMapDefaultSatelliteLayerProps, YMapFeatureDataSourceProps } from "@yandex/ymaps3-types";
import React from "react";
import { YMapGeolocationControl as YMapGeolocationControlType, YMapZoomControl as YMapZoomControlType } from "@yandex/ymaps3-types/packages/controls";
import { YMapClusterer as YMapClusterrType } from "@yandex/ymaps3-types/packages/clusterer";
import { YMapDefaultMarker as YMapDefaultMarkerType } from "@yandex/ymaps3-types/packages/markers";
import YMapHint, { YMapHintContext } from "./YMapHint";
declare const YMapGeolocationControl: React.FC<YMapGeolocationControlType & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<YMapGeolocationControlType & React.JSX.IntrinsicAttributes>>;
declare const YMapZoomControl: React.FC<YMapZoomControlType & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<YMapZoomControlType & React.JSX.IntrinsicAttributes>>;
declare const YMapClusterer: React.FC<YMapClusterrType & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<YMapClusterrType & React.JSX.IntrinsicAttributes>>;
declare const YMapDefaultMarker: React.FC<YMapDefaultMarkerType & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<YMapDefaultMarkerType & React.JSX.IntrinsicAttributes>>;
declare const YMap: React.FC<YMapProps & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<YMapProps & React.JSX.IntrinsicAttributes>>;
declare const ThemeContext: React.FC<ThemeContextProps & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<ThemeContextProps & React.JSX.IntrinsicAttributes>>;
declare const YMapDefaultSchemeLayer: React.FC<YMapDefaultSchemeLayerProps & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<YMapDefaultSchemeLayerProps & React.JSX.IntrinsicAttributes>>;
declare const YMapDefaultFeaturesLayer: React.FC<YMapDefaultFeaturesLayerProps & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<YMapDefaultFeaturesLayerProps & React.JSX.IntrinsicAttributes>>;
declare const YMapLayer: React.FC<YMapLayerProps & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<YMapLayerProps & React.JSX.IntrinsicAttributes>>;
declare const YMapControl: React.FC<React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<React.JSX.IntrinsicAttributes>>;
declare const YMapControls: React.FC<YMapControlsProps & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<YMapControlsProps & React.JSX.IntrinsicAttributes>>;
declare const YMapControlButton: React.FC<import("@yandex/ymaps3-types/imperative/YMapControl").YMapControlCommonButtonProps & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<import("@yandex/ymaps3-types/imperative/YMapControl").YMapControlCommonButtonProps & React.JSX.IntrinsicAttributes>>;
declare const YMapTileDataSource: React.FC<YMapTileDataSourceProps & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<YMapTileDataSourceProps & React.JSX.IntrinsicAttributes>>;
declare const YMapMarker: React.FC<{
    coordinates: import("@yandex/ymaps3-types/common/types/lng-lat").LngLat;
    source?: string | undefined;
    zIndex?: number | undefined;
    properties?: Record<string, unknown> | undefined;
    id?: string | undefined;
    disableRoundCoordinates?: boolean | undefined;
    hideOutsideViewport?: import("@yandex/ymaps3-types/common/types/graphics").HideOutsideRule | undefined;
} & import("@yandex/ymaps3-types/imperative/YMapFeature/types").DraggableProps<import("@yandex/ymaps3-types/imperative/YMapMarker").YMapMarkerEventHandler> & import("@yandex/ymaps3-types/imperative/YMapFeature/types").FeatureClickEvents & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<{
    coordinates: import("@yandex/ymaps3-types/common/types/lng-lat").LngLat;
    source?: string | undefined;
    zIndex?: number | undefined;
    properties?: Record<string, unknown> | undefined;
    id?: string | undefined;
    disableRoundCoordinates?: boolean | undefined;
    hideOutsideViewport?: import("@yandex/ymaps3-types/common/types/graphics").HideOutsideRule | undefined;
} & import("@yandex/ymaps3-types/imperative/YMapFeature/types").DraggableProps<import("@yandex/ymaps3-types/imperative/YMapMarker").YMapMarkerEventHandler> & import("@yandex/ymaps3-types/imperative/YMapFeature/types").FeatureClickEvents & React.JSX.IntrinsicAttributes>>;
declare const YMapListener: React.FC<YMapListenerProps & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<YMapListenerProps & React.JSX.IntrinsicAttributes>>;
declare const YMapFeature: React.FC<{
    id?: string | undefined;
    geometry: import("@yandex/ymaps3-types/imperative/YMapFeature/types").Geometry;
    source?: string | undefined;
    style?: import("@yandex/ymaps3-types/common/types/graphics").DrawingStyle | undefined;
    properties?: Record<string, unknown> | undefined;
    disableRoundCoordinates?: boolean | undefined;
    hideOutsideViewport?: import("@yandex/ymaps3-types/common/types/graphics").HideOutsideRule | undefined;
} & import("@yandex/ymaps3-types/imperative/YMapFeature/types").DraggableProps<import("@yandex/ymaps3-types/imperative/YMapFeature/types").YMapFeatureEventHandler> & import("@yandex/ymaps3-types/imperative/YMapFeature/types").FeatureClickEvents & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<{
    id?: string | undefined;
    geometry: import("@yandex/ymaps3-types/imperative/YMapFeature/types").Geometry;
    source?: string | undefined;
    style?: import("@yandex/ymaps3-types/common/types/graphics").DrawingStyle | undefined;
    properties?: Record<string, unknown> | undefined;
    disableRoundCoordinates?: boolean | undefined;
    hideOutsideViewport?: import("@yandex/ymaps3-types/common/types/graphics").HideOutsideRule | undefined;
} & import("@yandex/ymaps3-types/imperative/YMapFeature/types").DraggableProps<import("@yandex/ymaps3-types/imperative/YMapFeature/types").YMapFeatureEventHandler> & import("@yandex/ymaps3-types/imperative/YMapFeature/types").FeatureClickEvents & React.JSX.IntrinsicAttributes>>;
declare const YMapDefaultSatelliteLayer: React.FC<YMapDefaultSatelliteLayerProps & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<YMapDefaultSatelliteLayerProps & React.JSX.IntrinsicAttributes>>;
declare const YMapCollectionComponent: React.FC<YMapCollection & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<YMapCollection & React.JSX.IntrinsicAttributes>>;
declare const YMapContainer: React.FC<YMapContainerProps<any> & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<YMapContainerProps<any> & React.JSX.IntrinsicAttributes>>;
declare const YMapFeatureDataSource: React.FC<YMapFeatureDataSourceProps & React.JSX.IntrinsicAttributes> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<YMapFeatureDataSourceProps & React.JSX.IntrinsicAttributes>>;
export { YMapHint, YMapHintContext, YMapDefaultMarker, YMapClusterer, YMapGeolocationControl, YMapZoomControl, ThemeContext, YMapComponentsProvider, YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapLayer, YMapControl, YMapControls, YMapControlButton, YMapTileDataSource, YMapMarker, YMapListener, YMapFeature, YMapDefaultSatelliteLayer, YMapCollectionComponent as YMapCollection, YMapContainer, YMapFeatureDataSource, };
