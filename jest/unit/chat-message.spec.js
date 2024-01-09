import { shallowMount } from "@vue/test-utils";
import ChatMessage from "../../resources/js/components/ChatMessage.vue";

describe('ChatMessage.vue', () => {
  it('own chat message is rendered successfully', () =>{
    const wrapper = shallowMount(ChatMessage, {
      props: {
        message: {
          user: {
            email: 'test@test.com',
            name: 'TestUser'
          },
          message: 'Hello',
          created_at: new Date(2024, 0, 3, 10, 50)
        },
        user: {
          email: 'test@test.com'
        }
      }
    });

    expect(wrapper.find('.header').find('strong').text()).toBe('TestUser');
    expect(wrapper.find('.header').find('.date').text()).toBe('3/1/2024, 10:50');
    expect(wrapper.find('p').text()).toBe('Hello');

  }),

  it('other user chat message is rendered successfully', () =>{
    const wrapper = shallowMount(ChatMessage, {
      props: {
        message: {
          user: {
            email: 'notmyuseremail@test.com',
            name: 'TestUser'
          },
          message: 'Hello',
          created_at: new Date(2024, 0, 3, 10, 50)
        },
        user: {
          email: 'test@test.com'
        }
      }
    });

    expect(wrapper.find('.header').find('strong').text()).toBe('TestUser');
    expect(wrapper.find('.header').find('.date').text()).toBe('3/1/2024, 10:50');
    expect(wrapper.find('p').text()).toBe('Hello');

  }),
  it('own chat message is has my-message class', () =>{
    const wrapper = shallowMount(ChatMessage, {
      props: {
        message: {
          user: {
            email: 'test@test.com',
            name: 'TestUser'
          },
          message: 'Hello',
          created_at: new Date(2024, 0, 3, 10, 50)
        },
        user: {
          email: 'test@test.com'
        }
      }
    });

    expect(wrapper.find('.my-message').exists()).toBeTruthy();
  }),

  it('other user chat message is has other-message class', () =>{
    const wrapper = shallowMount(ChatMessage, {
      props: {
        message: {
          user: {
            email: 'notmyuseremail@test.com',
            name: 'TestUser'
          },
          message: 'Hello',
          created_at: new Date(2024, 0, 3, 10, 50)
        },
        user: {
          email: 'test@test.com'
        }
      }
    });

    expect(wrapper.find('.other-message').exists()).toBeTruthy();
  })
});