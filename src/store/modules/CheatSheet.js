/* @flow */
import lodash from 'lodash'
const _: any = lodash

const state: any = {
  contents: {
    common: {
      header: {
        title: 'header',
        text: 'center header\n\nendheader'
      },
      footer: {
        title: 'footer',
        text: 'center footer\n\nendfooter'
      },
      scale: {
        title: 'scale',
        text: 'scale'
      },
      define: {
        title: 'define',
        text: '!define'
      },
      title: {
        title: 'title',
        text: 'title'
      },
      legend: {
        title: 'legend',
        text: 'legend center\n\nendlegend'
      },
      caption: {
        title: 'caption',
        text: 'caption'
      },
      direction: {
        title: 'direction',
        text: 'left to right direction'
      },
      label: {
        title: 'label',
        text: ':'
      },
      comment: {
        title: 'comment',
        text: "'"
      },
      blockcomment: {
        title: 'block comment',
        text: "/'\ncomment\n'/"
      },
      solidline: {
        title: 'solid line',
        text: '-->'
      },
      dashedline: {
        title: 'dashed line',
        text: '..>'
      },
      noteleft: {
        title: 'note left',
        text: 'note left :'
      },
      noteright: {
        title: 'note right',
        text: 'note right :'
      },
      noteblock: {
        title: 'note block',
        text: 'note left of A\n\nend note'
      },
      actor: {
        title: 'actor',
        text: 'actor',
        img: 'UDfpA2v9B2efpStXuh9oJ2x9Br98pCbCBBRYud98pKi1YWC0mMaBGG00'
      },
      actoralias: {
        title: 'actor',
        text: ':Actor alias:'
      },
      agent: {
        title: 'agent',
        text: 'agent',
        img: 'UDfpA2v9B2efpStXuafCJyqhKG2JN5mEgNafG540i5aAw000'
      },
      usecase: {
        title: 'usecase',
        text: 'usecase',
        img: 'UDfpA2v9B2efpStXuYejJarEB4vLWD9SN0wfUIb06G3bpmoS'
      },
      node: {
        title: 'node',
        text: 'node',
        img: 'UDfpA2v9B2efpStXuihBJqbL01FHO3PNB1UNGsfU2b0I0Ftn3AW0'
      },
      nodeblock: {
        title: 'node block',
        text: 'node Node [\nnode\n]'
      },
      database: {
        title: 'database',
        text: 'database',
        img: 'UDfpA2v9B2efpStXuaf9B4bCIYnELO0pehbSdBXYkRWSKlDIW4e0M8iEfW00'
      },
      databaseblock: {
        title: 'database block',
        text: 'database DB [\nDB\n]'
      },
      storage: {
        title: 'storage',
        text: 'storage',
        img: 'UDfpA2v9B2efpStXuYekoIzAJ4zLWD7HC16kM2ukXzIy5A0g09aj49K0'
      },
      storageblock: {
        title: 'storage block',
        text: 'storage Storage [\nstorage\n]'
      },
      component: {
        title: 'component',
        text: '[Component]',
        img: 'UDfpA2v9B2efpStXuefspiyjoCzBpIk9vU9oICrB0Oe20BAT2nK0'
      },
      skinparammonochrome: {
        title: 'skinparam\nmonochrome',
        text: 'skinparam monochrome true'
      },
      skinparammonochromereverse: {
        title: 'skinparam\nmonochrome\nreverse',
        text: 'skinparam monochrome reverse'
      },
      skinparamhandwritten: {
        title: 'skinparam\nhandwritten',
        text: 'skinparam handwritten true'
      },
      skinparamshadowing: {
        title: 'skinparam\nshadowing',
        text: 'skinparam shadowing false'
      },
      skinparambackgroundcolor: {
        title: 'skinparam\nbackgroundColor',
        text: 'skinparam backgroundColor #EEEEEE'
      }
    },
    usecase: {
      rectangle: {
        title: 'rectangle',
        text: 'rectangle Job {\n\n}'
      },
      up: {
        title: 'up',
        text: '-up->'
      },
      right: {
        title: 'right',
        text: '-right->'
      },
      down: {
        title: 'down',
        text: '-down->'
      },
      left: {
        title: 'left',
        text: '-left->'
      }
    },
    activity: {
      if: {
        title: 'if',
        text: 'if (try) then (true)\n\nelse (false)\n\nendif'
      },
      repeat: {
        title: 'repeat',
        text: 'repeat\n\nrepeat while (error)'
      },
      while: {
        title: 'while',
        text: 'while (try) is (true)\n\nendwhile (false)'
      },
      fork: {
        title: 'fork',
        text: 'fork\n\nfork again\n\nend fork'
      },
      partition: {
        title: 'partition',
        text: 'partition A {\n\n}'
      }
    },
    sequence: {
      autonumber: {
        title: 'autonumber',
        text: 'autonumber'
      },
      participant: {
        title: 'participant',
        text: 'participant ABC as abc',
        img: 'UDfpA2v9B2efpStXuYe0CZAJCmiIyqeK79sSkRWSKlDIW380uZKCBm00'
      },
      activate: {
        title: 'activate',
        text: 'activate'
      },
      deactivate: {
        title: 'deactivate',
        text: 'deactivate'
      },
      altelse: {
        title: 'alt/else',
        text: 'alt success\n\nelse error\n\nend'
      },
      loop: {
        title: 'loop',
        text: 'loop title\n\nend'
      },
      separate: {
        title: 'separate',
        text: '== =='
      }
    },
    object: {
      object: {
        title: 'object',
        text: 'object A {\n\n}'
      },
      extension: {
        title: 'Extension',
        text: '<|-'
      },
      composition: {
        title: 'Composition',
        text: '*-'
      },
      aggregation: {
        title: 'Aggregation',
        text: 'o-'
      }
    },
    class: {
      public: {
        title: 'Public',
        text: '+'
      },
      private: {
        title: 'Private',
        text: '-'
      },
      protected: {
        title: 'Protected',
        text: '#'
      },
      packageprivate: {
        title: 'Package Private',
        text: '~'
      },
      static: {
        title: 'static',
        text: '{static}'
      },
      abstract: {
        title: 'abstract',
        text: '{abstract}'
      },
      abstractkeyword: {
        title: 'abstract keyword',
        text: 'abstract'
      },
      interface: {
        title: 'interface',
        text: 'interface'
      },
      package: {
        title: 'package',
        text: 'package A {\n\n}'
      },
      namespace: {
        title: 'namespace',
        text: 'namespace A {\n\n}'
      }
    },
    er: {
      one: {
        title: '1',
        text: '-'
      },
      zeroOrOne: {
        title: '0 or 1',
        text: '-o|'
      },
      oneAndOnlyOne: {
        title: 'one and only 1',
        text: '-||'
      },
      many: {
        title: 'many',
        text: '-{'
      },
      zeroOrMany: {
        title: '0 or many',
        text: '-o{'
      },
      oneOrMany: {
        title: '1 or many',
        text: '-|{'
      }
    }
  }
}

const getters: any = {
  snippets({ contents }: any): { text?: string, displayText?: string }[] {
    let results: { text?: string, displayText?: string }[] = []
    _.forEach(contents, function(snippets: any, category: string) {
      _.forEach(snippets, function(snippet: any) {
        results[results.length] = {
          text: snippet.text,
          displayText: `${snippet.title} : ( ${category} )`
        }
      })
    })
    return results
  }
}

export default {
  namespaced: true,
  state,
  getters
}
