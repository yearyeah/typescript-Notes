import MainTuple from './tuple';
import MainEnum from './enum';
import MainUnionTypes from './union';
import MainAssertion from './assertion';

export default function baseMain() {
  console.log('---------- base type star ----------');
  MainTuple();
  MainEnum();
  MainUnionTypes();
  MainAssertion();
}
