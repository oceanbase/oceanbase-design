import { VENDOR_NAME } from '@/constants/const/connect';
import { useInstances } from '@/hooks/request/instances';
import { formatMessage, getRegionDisplayText, isEnglish } from '@/utils';

interface Option {
  label: string;
  value: string;
}

export enum FilterKey {
  InstanceType = 'instanceType',
  StorageArchitecture = 'storageArchitecture',
  Version = 'version',
  CloudProvider = 'cloudProvider',
  Region = 'region',
  Status = 'status',
  TagList = 'tagList',
}

export const useFilterInstance = () => {
  const { injectInstances } = useInstances();

  // 实例类型
  const instanceTypeOptions: Option[] = [];
  injectInstances.data.forEach(instance => {
    let filterValue = '';
    let label = '';
    if (instance.isAPMode) {
      filterValue = 'isAPMode';
      label = formatMessage({
        id: 'obcloud-console.components.InstanceFilterPanel.ClusterInstanceAnalytical',
        dm: '集群实例 (分析型)',
      });
    } else if (instance.isClusterMode) {
      filterValue = 'isClusterMode';
      label = formatMessage({
        id: 'obcloud-console.components.InstanceFilterPanel.ClusterInstanceTransactionType',
        dm: '集群实例 (事务型)',
      });
    } else if (instance.isKVMode) {
      filterValue = 'isKVMode';
      label = formatMessage({
        id: 'obcloud-console.components.InstanceFilterPanel.ClusterInstanceKvType',
        dm: '集群实例 (KV 型)',
      });
    } else if (instance.isSharedAPMySQL) {
      filterValue = 'isSharedAPMySQL';
      label = formatMessage({
        id: 'obcloud-console.components.InstanceFilterPanel.SharedInstanceAnalytical',
        dm: '共享实例 (分析型)',
      });
    } else if (instance.isSharedTPMySQL) {
      filterValue = 'isSharedTPMySQL';
      label = formatMessage({
        id: 'obcloud-console.components.InstanceFilterPanel.SharedInstanceTransactionalMysqlCompatibility',
        dm: '共享实例 (事务型 MySQL 兼容模式)',
      });
    } else if (instance.isSharedTPOracle) {
      filterValue = 'isSharedTPOracle';
      label = formatMessage({
        id: 'obcloud-console.components.InstanceFilterPanel.SharedInstanceTransactionalOracleCompatibility',
        dm: '共享实例 (事务型 Oracle 兼容模式)',
      });
    }
    instanceTypeOptions.push({
      label,
      value: filterValue,
    });
  });

  // 存储架构
  const storageArchitectureOptions: Option[] = [];
  injectInstances.data.forEach(instance => {
    if (instance.storageArchitecture.isSharedNothing) {
      storageArchitectureOptions.push({
        label: formatMessage({
          id: 'obcloud-console.components.InstanceFilterPanel.StorageAndCalculationIntegration',
          dm: '存算一体',
        }),
        value: 'isSharedNothing',
      });
    } else if (instance.storageArchitecture.isSharedStorage) {
      storageArchitectureOptions.push({
        label: formatMessage({
          id: 'obcloud-console.components.InstanceFilterPanel.StorageAndCalculationSeparation',
          dm: '存算分离',
        }),
        value: 'isSharedStorage',
      });
    }
  });

  // 版本
  const versionOptions: Option[] = [];
  injectInstances.data.forEach(instance => {
    if (instance.state.version) {
      versionOptions.push({
        label: `V ${instance.state.version}`,
        value: instance.state.version,
      });
    }
  });

  // 云厂商
  const cloudProviderOptions: Option[] = [];
  injectInstances.data.forEach(instance => {
    if (instance.state.cloudProvider) {
      cloudProviderOptions.push({
        label: VENDOR_NAME[instance.state.cloudProvider] || instance.state.cloudProvider,
        value: instance.state.cloudProvider,
      });
    }
  });

  // 地域
  const regionOptions: Option[] = [];
  injectInstances.data.forEach(instance => {
    const regionName = getRegionDisplayText(
      instance.state.region || '',
      instance.state.cloudProvider as CloudProvider,
      !isEnglish()
    );
    if (instance.state.region) {
      regionOptions.push({
        label: regionName || instance.state.region,
        value: instance.state.region,
      });
    }
  });

  const filterUnique = (list: Option[]) => {
    return list.filter(
      (item, index, self) => index === self.findIndex(t => t.value === item.value)
    );
  };

  return {
    instanceTypeOptions: filterUnique(instanceTypeOptions),
    storageArchitectureOptions: filterUnique(storageArchitectureOptions),
    versionOptions: filterUnique(versionOptions),
    cloudProviderOptions: filterUnique(cloudProviderOptions),
    regionOptions: filterUnique(regionOptions),
  };
};
