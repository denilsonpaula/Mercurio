import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  background: {
    resizeMode: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    marginBottom: 12,
    paddingLeft: '20%',
    paddingRight: '20%',
    borderRadius: 4,
    backgroundColor: '#333333',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#333333',
    color: '#f1f1f1',
  },
  downInput: {
    marginBottom: 12,
    paddingLeft: '20%',
    paddingRight: '20%',
    borderRadius: 4,
    backgroundColor: '#333333',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#333333',
    color: '#f1f1f1',
  },
  logo: {
    marginTop: 52,
    marginBottom: 52,
    display: 'flex',
    alignSelf: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default styles;
