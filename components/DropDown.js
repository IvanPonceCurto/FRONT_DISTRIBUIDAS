import {React,useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

    class DropDown extends React.Component {
        constructor(props) {
          super(props);
          
          this.state = {
            open: false,
            value: null,
            items: [
                {
                    label:'Platino',
                    value:'platino'
                  },
                  {
                    label:'Oro',
                    value:'oro'
                  },
                  {
                    label:'Plata',
                    value:'plata'
                  }
                ]
          };
      
          this.setValue = this.setValue.bind(this);
        }
      
        setOpen(open) {
          this.setState({
            open
          });
        }
      
        setValue(callback) {
          this.setState(state => ({
            value: callback(state.value)
          }));
        }
      
        setItems(callback) {
          this.setState(state => ({
            items: callback(state.items)
          }));
        }
      
        render() {
          const { open, value, items } = this.state;
      
          return (
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              
            />
          );
        }
      }

      export default DropDown;