import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput, FlatList, } from 'react-native';
import { useState } from 'react';
import { BlurView } from 'expo-blur';


export default function App() {
  const [detailCard, setDetailCard] = useState(false)
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [isAdded, setIsAdded] = useState(false)
  const handleButt = () => {
    setDetailCard(!detailCard)
  }
  const closeButt = () => {
    setDetailCard(false)
  }
  const handleAddButtonPress = () => {
    if (inputText !== '') {
      setTodoList([...todoList, inputText]);
      setInputText('');
      setDetailCard(false)
    }
  }
  const handleDeleteTask = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <>

      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.Head}>
          <Text style={styles.H1}>
            Tasks
          </Text>
          <FlatList
            style={styles.listStyle}
            data={todoList}
            renderItem={({ item, index }) => (
              <View style={styles.taskContainer}>
                <Text style={styles.taskText}>{item}</Text>
                <Pressable onPress={() => handleDeleteTask(index)}>
                  <Text style={styles.deleteButt}>x</Text>
                </Pressable>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()
            }

          />

          <Pressable onPress={handleButt}
            style={styles.butt}><Text style={styles.buttText}>
              +
            </Text>
          </Pressable>
        </View>
      </View>
      {detailCard && (
        <View style={styles.DetailCardStyle}>

          <Text style={styles.inputText}>
            add Tasks or Items
          </Text>
          <Text onPress={closeButt} style={styles.closeButtStyle}>
            x
          </Text>
          <TextInput
            placeholderTextColor='black'
            placeholder='add new task'
            multiline={true}
            numberOfLines={4}
            maxLength={75}
            style={styles.inputStyle}
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />
          <Text onPress={handleAddButtonPress} style={styles.addButtStyle} >
            Add+
          </Text>
        </View>
      )}
    </>

  );
}

const styles = StyleSheet.create({
  container: {
  },
  Head: {
    display: 'flex',
    justifyContent: 'center'
  },
  H1: {
    position: 'relative',
    top: 70,
    left: 125,
    fontSize: 40,
    // fontFamily: 'lato'    
  },
  butt: {
    maxWidth: 80,
    maxHeight: 80,
    marginRight: 40,
    position: 'absolute',
    top: 650,
    left: 260,
    backgroundColor: '#2a8ce8',
    borderRadius: 40,
    paddingHorizontal: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  buttText: {
    position: 'relative',
    // left: ,
    bottom: 3.5,
    fontSize: 70,
    color: 'white'
  },
  DetailCardStyle: {
    position: 'absolute',
    top: 190,
    left: 20,
    paddingVertical: 10,
    // backgroundColor: '#6f7070',
    // paddingRight: 10
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  inputText: {
    position: 'relative',
    top: 15,
    left: 70,
    fontSize: 25,
    color: 'black'
  },
  inputStyle: {
    color: 'black',
    textAlignVertical: 'top',
    width: 320,
    fontSize: 20,
    backgroundColor: 'hsla(279, 100%, 100%, 0.92)',
    borderWidth: 1,
    borderRadius: 10,
    zIndex: 1,
    position: 'relative',
    bottom: 10,
    padding: 5
  },
  closeButtStyle: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'red',
    maxWidth: 26,
    paddingBottom: 3,
    paddingLeft: 8,
    borderRadius: 15,
    position: 'relative',
    left: 290,
    bottom: 11,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  addButtStyle: {
    color: 'white',
    backgroundColor: '#3cbf04',
    fontSize: 20,
    maxWidth: 55,
    paddingLeft: 3,
    paddingVertical: 2,
    borderRadius: 5,
    position: 'relative',
    left: 135,
    top: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  listStyle: {
    // backgroundColor: 'green',
    // paddingVertical: 10,
    position: 'relative',
    top: 100,
    left: 20,
    marginBottom: 200,

  },
  taskText: {
    maxHeight: 60,
    maxWidth: 300,
    color: 'white',
    fontSize: 20,
    paddingLeft: 20,
    paddingBottom: 15,
    paddingTop: 15,
    position: 'relative',
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#479ded',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  deleteButt: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'red',
    maxWidth: 26,
    paddingBottom: 3,
    paddingLeft: 8,
    borderRadius: 15,
    position: 'relative',
    left: 270,
    bottom: 48,

  }

});
